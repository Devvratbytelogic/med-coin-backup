import React, { useContext, useEffect, useState, useRef } from "react";
import Modal from 'react-modal';
import Context from "../context/context";
import Web3 from "web3";
import PresaleContract from '../abis/presale.json'
import USDTContract from '../abis/usdt.json'
import USDCContract from '../abis/usdc.json'
import Swal  from "sweetalert2";
import { providerURL, toHex, txAfterDone, txDone, txStart } from './utils';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import * as ethers from 'ethers';
import TransactionStatus from "./trxStatus";

const Presale = ({ initialText, expandedText }) => {
    const [copyaddress, setCopyaddress] = useState("");
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function myCopy(e) {
        navigator.clipboard.writeText(e.currentTarget.title);
        setIsOpen(true);
        setCopyaddress(" " + e.currentTarget.title);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const Ref = useRef(null);
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    const getTimeRemaining = (futureDate) => {
       const total = parseInt(futureDate) - parseInt(Date.now());
       const days = Math.floor(total / (1000 * 60 * 60 * 24));
       const seconds = Math.floor((total / 1000) % 60);
       const minutes = Math.floor((total / 1000 / 60) % 60);
       const hours = Math.floor((total / 1000 / 60 / 60) % 24);
       return {total, days, hours, minutes, seconds};
    }
    
    const startTimer = (futureDate) => {
        let { total, days ,hours, minutes, seconds } = getTimeRemaining(parseInt(futureDate));
        if (total >= 0) 
        {
            setDays(days > 9 ? days : '0' + days);
            setHours(hours > 9 ? hours : '0' + hours);
            setMinutes(minutes > 9 ? minutes : '0' + minutes);
            setSeconds(seconds > 9 ? seconds : '0' + seconds);
        }
    }

    const clearTimer = (futureDate) => {
       setInterval(() => {
         startTimer(futureDate);
       }, 1000)
    }

    const { account, onConnect, providers} = useContext(Context);
    const [refresh, setRefresh] = useState(false);
    const [saleStatus, setSaleStatus] = useState(true);
    const [claimStatus, setClaimStatus] = useState(false);
    const [refundStatus, setRefundStatus] = useState(false);
    const [currentRound, setCurrentRound] = useState(0);
    const [tokenPrice, setTokenPrice] = useState('0.000');
    const [tokenSold, setTokenSold] = useState('0.00');
    const [tokenToSold, setTokenToSold] = useState('250000000.00');
    const [USDRaised, setUSDRaised] = useState('0.00');
    const [minPurchase, setMinPurchase] = useState(0);
    const [maxPurchase, setMaxPurchase] = useState(0);
    const [userBalanceUSDT, setUserBalanceUSDT] = useState(0);
    const [userBalanceUSDC, setUserBalanceUSDC] = useState(0);
    const [userBalanceBNB, setUserBalanceBNB] = useState(0);
    const [approvedTokensUSDT, setApprovedTokensUSDT] = useState(0);
    const [approvedTokensUSDC, setApprovedTokensUSDC] = useState(0);
    const [approvedTokens, setApprovedTokens] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState('USDT');
    const [usdtBuyAmount, setUSDTBuyAmount] = useState(0);
    const [tokenBuyAmount, setTokenBuyAmount] = useState(0);
    const [BNBPrice, setBNBPrice] = useState();
    const [tokenFromBuy, setTokenFromBuy] = useState(0);
    const [tokenFromReward, setTokenFromReward] = useState(0);
    const [USDPaid, setUSDPaid] = useState(0);
    const [tokenClaimed, setTokenClaimed] = useState(0);
    const [USDTPaid, setUSDTPaid] = useState(0);
    const [USDCPaid, setUSDCPaid] = useState(0);
    const [BNBPaid, setBNBPaid] = useState(0);
    const [sponsor, setSponsor] = useState('0x0000000000000000000000000000000000000000');

    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    useEffect(() => {
        if (window.location.href.includes("?referid=")) 
        {
            setSponsor(String(getParameterByName("referid")).toLowerCase())
        } 
        init()
        if(account) 
        {
            getUserData()
        }
    }, [account, refresh]);

    const init = async () => {
        const web3 = new Web3(providerURL());
        const presale = new web3.eth.Contract(PresaleContract.ABI, PresaleContract.CONTRACT);

        const saleStatus = await presale.methods.saleStatus().call();
        const claimStatus = await presale.methods.claimStatus().call();
        const refundStatus = await presale.methods.refundStatus().call();

        setSaleStatus(saleStatus);
        setClaimStatus(claimStatus);
        setRefundStatus(refundStatus);

        if(saleStatus === false && claimStatus === false && refundStatus === false)
        {
			await clearTimer(1750663800000);
        }
        setTokenSold(parseFloat(parseInt((await presale.methods.tokenSold().call())) / 10 ** 18).toFixed(2));
        setUSDRaised(parseFloat(parseInt((await presale.methods.USDRaised().call())) / 10 ** 18).toFixed(2));
        setBNBPrice(parseFloat(parseInt(await presale.methods.getLatestPrice().call()) / 10 ** 18).toFixed(3));
        setTokenPrice(parseFloat(parseInt(await presale.methods.getCurrentTokenPrice().call()) / 10 ** 18).toFixed(3));
        setMinPurchase(parseFloat(parseInt(await presale.methods.minPurchaseUSD().call()) / 10 ** 18).toFixed(2));
        setMaxPurchase(parseFloat(parseInt(await presale.methods.maxPurchaseUSD().call()) / 10 ** 18).toFixed(2));
    }
    
    const getUserData = async () => {
        const web3 = new Web3(providers);
        const presale = new web3.eth.Contract(PresaleContract.ABI, PresaleContract.CONTRACT);
        const usdt = new web3.eth.Contract(USDTContract.ABI, USDTContract.CONTRACT);
        const usdc = new web3.eth.Contract(USDCContract.ABI, USDCContract.CONTRACT);

        let approvedUSDT = parseInt(await usdt.methods.allowance(account, PresaleContract.CONTRACT).call());
        let approvedUSDC = parseInt(await usdc.methods.allowance(account, PresaleContract.CONTRACT).call());

        setApprovedTokensUSDT(approvedUSDT);
        setApprovedTokensUSDC(approvedUSDC);

        setUserBalanceUSDT(parseFloat(parseInt(await usdt.methods.balanceOf(account).call()) / 10**18).toFixed(4));
        setUserBalanceUSDC(parseFloat(parseInt(await usdc.methods.balanceOf(account).call()) / 10**18).toFixed(4));
        setUserBalanceBNB(parseFloat(parseInt(await web3.eth.getBalance(account)) / 10**18).toFixed(4));

        let mapUserInfo = await presale.methods.mapBuyInfo(account).call();
        if(mapUserInfo.sponsor !== "0x0000000000000000000000000000000000000000")
        {
			setSponsor(mapUserInfo.sponsor);
        }
		
        setTokenFromBuy(parseFloat(parseInt(mapUserInfo.tokenBought) / 10**18).toFixed(2));
        setTokenFromReward(parseFloat(parseInt(mapUserInfo.referralToken) / 10**18).toFixed(2));
        setTokenClaimed(parseFloat(parseInt(mapUserInfo.tokenClaimed) / 10**18).toFixed(2));
        setUSDPaid(parseFloat(parseInt(mapUserInfo.USDPaid) / 10**18).toFixed(3));
        setUSDTPaid(parseFloat(parseInt(mapUserInfo.USDTPaid) / 10**18).toFixed(3));
        setUSDCPaid(parseFloat(parseInt(mapUserInfo.USDCPaid) / 10**18).toFixed(3));
        setBNBPaid(parseFloat(parseInt(mapUserInfo.BNBPaid) / 10**18).toFixed(3));

        if(selectedCurrency=="USDT")
        {
			setApprovedTokens(approvedUSDT);
        }
        else if(selectedCurrency=="USDC")
        {
			setApprovedTokens(approvedUSDC);
        }
        else
        {
			setApprovedTokens(99999999999999999999999999999999);
        }
    }

    const approveToken = async () => {
        const web3 = new Web3(providers);
        let contract;
        if(selectedCurrency=="USDT")
        {
            contract = new web3.eth.Contract(USDTContract.ABI, USDTContract.CONTRACT);
        }
        else
        {
            contract = new web3.eth.Contract(USDCContract.ABI, USDCContract.CONTRACT);
        }
        try 
        {
            const finalAmount = ethers.parseEther(String(usdtBuyAmount));
            await contract.methods.approve(PresaleContract.CONTRACT, String(finalAmount)).send({
                from: account
            }).once('sent', function(payload) {
                txStart();
            }).on('error', function(error) {
                Swal.fire({
                    title: "Error Found",
                    text: error.message,
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            }).then(function(receipt) {
                txDone()
                setTimeout(() => {
                    txAfterDone()
                }, 2000)
                buyToken();
            });
        } catch (error) {
            Swal.fire({
                title: "Error Found",
                text: error.message,
                showCancelButton: false,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Close",
                closeOnConfirm: false
            });
        } 
    }

    const buyTokenUSDT = async () => {
        const web3 = new Web3(providers);
        const presale = new web3.eth.Contract(PresaleContract.ABI, PresaleContract.CONTRACT);
        try 
        {
            if (parseFloat(minPurchase) > parseFloat(usdtBuyAmount)) {
                Swal.fire({
                    title: "Error Found",
                    text: "You can't invest less than " +minPurchase+ " USD",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            } else if((parseFloat(usdtBuyAmount) + parseFloat(USDPaid)) > parseFloat(maxPurchase)) {
                Swal.fire({
                    title: "Error Found",
                    text: "You can't invest more than " +(parseFloat(maxPurchase) - parseFloat(USDPaid))+ " USD",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            } else if(account.toLowerCase() === sponsor.toLowerCase()) {
                Swal.fire({
                    title: "Error Found",
                    text: "Buyer and sponsor address can't be same",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            } else if (parseFloat(usdtBuyAmount) > parseFloat(userBalanceUSDT)) {
                Swal.fire({
                    title: "Error Found",
                    text: "You have insufficient USDT balance to purchase tokens",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            } else {
                const finalAmount = ethers.parseEther(String(usdtBuyAmount));
                await presale.methods.buyWithUSDT(String(finalAmount), sponsor).send({
                    from: account
                }).once('sent', function(payload) {
                    txStart();
                }).on('error', function(error) {
                    Swal.fire({
                        title: "Error Found",
                        text: error.message,
                        showCancelButton: false,
                        confirmButtonClass: "btn-danger",
                        confirmButtonText: "Close",
                        closeOnConfirm: false
                    });
                }).then(function(receipt) {
                    txDone()
                    setTimeout(() => {
                        txAfterDone()
                    }, 2000)
                    handleChangeCurrency("USDT");
                    setRefresh(!refresh)
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error Found",
                text: error.message,
                showCancelButton: false,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Close",
                closeOnConfirm: false
            });
        }
    }

    const buyTokenUSDC = async () => {
        const web3 = new Web3(providers);
        const presale = new web3.eth.Contract(PresaleContract.ABI, PresaleContract.CONTRACT);
        try 
        {
            if (parseFloat(minPurchase) > parseFloat(usdtBuyAmount)) {
                Swal.fire({
                    title: "Error Found",
                    text: "You can't invest less than " +minPurchase+ " USD",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            } else if((parseFloat(usdtBuyAmount) + parseFloat(USDPaid)) > parseFloat(maxPurchase)) {
                Swal.fire({
                    title: "Error Found",
                    text: "You can't invest more than " +(parseFloat(maxPurchase) - parseFloat(USDPaid))+ " USD",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            } else if(account.toLowerCase() === sponsor.toLowerCase()) {
                Swal.fire({
                    title: "Error Found",
                    text: "Buyer and sponsor address can't be same",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            } else if (parseFloat(usdtBuyAmount) > parseFloat(userBalanceUSDC)) {
                Swal.fire({
                    title: "Error Found",
                    text: "You have insufficient USDC balance to purchase tokens",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            } else {
                const finalAmount = ethers.parseEther(String(usdtBuyAmount));
                await presale.methods.buyWithUSDC(String(finalAmount), sponsor).send({
                    from: account
                }).once('sent', function(payload) {
                    txStart();
                }).on('error', function(error) {
                    Swal.fire({
                        title: "Error Found",
                        text: error.message,
                        showCancelButton: false,
                        confirmButtonClass: "btn-danger",
                        confirmButtonText: "Close",
                        closeOnConfirm: false
                    });
                }).then(function(receipt) {
                    txDone()
                    setTimeout(() => {
                        txAfterDone()
                    }, 2000)
                    handleChangeCurrency("USDC");
                    setRefresh(!refresh)
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error Found",
                text: error.message,
                showCancelButton: false,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Close",
                closeOnConfirm: false
            });
        }
    }

    const buyTokenBNB = async () => {
        const web3 = new Web3(providers);
        const presale = new web3.eth.Contract(PresaleContract.ABI, PresaleContract.CONTRACT);
        try 
        {
            if (parseFloat(minPurchase) > (parseFloat(usdtBuyAmount) * parseFloat(BNBPrice))) {
                Swal.fire({
                    title: "Error Found",
                    text: "You can't invest less than " +minPurchase+ " USD",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            } else if(((parseFloat(usdtBuyAmount) * parseFloat(BNBPrice)) + parseFloat(USDPaid)) > parseFloat(maxPurchase)) {
                Swal.fire({
                    title: "Error Found",
                    text: "You can't invest more than " +(parseFloat(maxPurchase) - parseFloat(USDPaid))+ " USD",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            } else if(account.toLowerCase() === sponsor.toLowerCase()) {
                Swal.fire({
                    title: "Error Found",
                    text: "Buyer and sponsor address can't be same",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            } else if (parseFloat(usdtBuyAmount) > parseFloat(userBalanceBNB)) {
                Swal.fire({
                    title: "Error Found",
                    text: "You have insufficient BNB balance to purchase tokens",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            } else {
                const finalAmount = ethers.parseEther(String(usdtBuyAmount));
                await presale.methods.buyWithBNB(sponsor).send({
                    from: account,
                    value: finalAmount
                }).once('sent', function(payload) {
                    txStart();
                }).on('error', function(error) {
                    Swal.fire({
                        title: "Error Found",
                        text: error.message,
                        showCancelButton: false,
                        confirmButtonClass: "btn-danger",
                        confirmButtonText: "Close",
                        closeOnConfirm: false
                    });
                }).then(function(receipt) {
                    txDone()
                    setTimeout(() => {
                        txAfterDone()
                    }, 2000)
                    handleChangeCurrency("BNB");
                    setRefresh(!refresh)
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error Found",
                text: error.message,
                showCancelButton: false,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Close",
                closeOnConfirm: false
            });
        }
    }

    const claimToken = async () => {
        const web3 = new Web3(providers);
        const presale = new web3.eth.Contract(PresaleContract.ABI, PresaleContract.CONTRACT);
        try {
            await presale.methods.claimToken().send({
                from: account
            }).once('sent', function(payload) {
                txStart();
            }).on('error', function(error) {
                Swal.fire({
                    title: "Error Found",
                    text: error.message,
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            }).then(function(receipt) {
                txDone()
                setTimeout(() => {
                    txAfterDone()
                }, 2000)
                setRefresh(!refresh)
            });
        } catch (error) {
            Swal.fire({
                title: "Error Found",
                text: error.message,
                showCancelButton: false,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Close",
                closeOnConfirm: false
            });
        }
    }

    const claimRefund = async () => {
        const web3 = new Web3(providers);
        const presale = new web3.eth.Contract(PresaleContract.ABI, PresaleContract.CONTRACT);
        try {
            await presale.methods.claimRefund().send({
                from: account
            }).once('sent', function(payload) {
                txStart();
            }).on('error', function(error) {
                Swal.fire({
                    title: "Error Found",
                    text: error.message,
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            }).then(function(receipt) {
                txDone()
                setTimeout(() => {
                    txAfterDone()
                }, 2000)
                setRefresh(!refresh)
            });
        } catch (error) {
            Swal.fire({
                title: "Error Found",
                text: error.message,
                showCancelButton: false,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Close",
                closeOnConfirm: false
            });
        }
    }

    const buyToken = async () => {
        if(selectedCurrency=="USDT")
        {
            buyTokenUSDT();
        }
        else if(selectedCurrency=="USDC")
        {
            buyTokenUSDC();
        }
        else
        {
            buyTokenBNB();
        }
    }

    const handleChangeUSDT = async (val) => {
        if(selectedCurrency=="BNB")
        {
            var tokenReceivable = (val * BNBPrice) * (1 / tokenPrice)
            setTokenBuyAmount(parseFloat(tokenReceivable).toFixed(4))
            setUSDTBuyAmount(val)
        }
        else
        {
            var tokenReceivable = val * (1 / tokenPrice);
            setTokenBuyAmount(parseFloat(tokenReceivable).toFixed(4))
            setUSDTBuyAmount(val)
        }
    }

    const handleChangeToken = async (val) => {
        if(selectedCurrency=="BNB")
        {
            var USDPayable = (val * (tokenPrice)) / BNBPrice;
            setTokenBuyAmount(val)
            setUSDTBuyAmount(parseFloat(USDPayable).toFixed(7))
        }
        else
        {
            var USDPayable = val * (tokenPrice)
            setTokenBuyAmount(val)
            setUSDTBuyAmount(parseFloat(USDPayable).toFixed(4))
        }
    }

    const handleChangeCurrency = async (val) => {
       if(val=="USDT")
       {
            $('.replaceCurrency').attr('src','images/usdt.svg');
            setApprovedTokens(approvedTokensUSDT);
            setUSDTBuyAmount(0);
            setTokenBuyAmount(0);
       }
       else if(val=="USDC")
       {
            $('.replaceCurrency').attr('src','images/usdc.png');
            setApprovedTokens(approvedTokensUSDC);
            setUSDTBuyAmount(0);
            setTokenBuyAmount(0);
       }
       else if(val=="CARD")
       {
            $('.replaceCurrency').attr('src','images/2695971.png');
            setUSDTBuyAmount(0);
            setTokenBuyAmount(0);
       }
       else
       {
            $('.replaceCurrency').attr('src','images/bnb.png');
            setApprovedTokens(9999999999999999999999999999);
            setUSDTBuyAmount(0);
            setTokenBuyAmount(0);
       }
       setSelectedCurrency(val);
    }

    $(".multiBtns .btn.small").click(function(){
        $('.multiBtns .btn.small').removeClass("active");
        $(this).addClass("active");
    })
	
    return (
     <>
        <div className="presaleSlider" id='presaleBox'>
         <div className="timer">
            {
                saleStatus === false && claimStatus === false && refundStatus === false ?
                <>
                    <h5 className='text-center'>Time Remaining Until Presale Start</h5>
                    <div className="days d-flex  align-items-center justify-content-center ">
                        <div className="snTime">
                            <span>{days}</span> <div>Days</div>
                        </div>
                        <div className="snTime">
                            <span>{hours}</span><div>Hours</div>
                        </div>
                        <div className="snTime">
                            <span>{minutes}</span><div>Minutes</div>
                        </div>
                        <div className="snTime">
                            <span>{seconds}</span><div>Seconds</div>
                        </div>
                    </div> 
                </>
                :
                <>
                <div className="presaleSliderTitle text-center">
                    <h3>Presale</h3>
                    <p class="spacialP">Only <span>{parseFloat(((Math.floor(parseInt(tokenSold) / 1000000) + 1) * 1000000) - parseFloat(tokenSold)).toFixed(2)}</span> tokens left before<br/>price increases to  <span>${parseFloat(tokenPrice) + parseFloat(0.001)}</span>.</p>
                </div>
                </>
            }
           </div>
            <div className="presaleSliderbody mt-3">
              {/*
                <div className="whiteBox">
                    <div className="d-flex align-items-center mt-0 justify-content-between">
                        <div><h5 className="greenT gt"></h5></div>
                        <div><h5 className="greenT gt text-end">${parseFloat(((parseFloat(tokenToSold) - parseFloat(tokenSold)) * parseFloat(tokenPrice)) + parseFloat(USDRaised)).toLocaleString()}</h5></div>
                    </div>
                    <div className="loaderAni"><div style={{width: (parseFloat(tokenSold) / parseFloat(tokenToSold)) * 100 + '%'}}></div></div>
                    <div className='w-100' style={{position:'relative'}}>
                        <div className="d-flex align-items-center mt-2 justify-content-between " >
                            <div><h5 className="greenT gt mb-0"></h5></div>
                            <div><h5 className="greenT gt mb-0 text-end">Hardcap</h5></div>
                        </div>
                        <div class="smallCap" style={{
                                left: `${(75000 / ((parseFloat(tokenToSold) - parseFloat(tokenSold)) * parseFloat(tokenPrice) + parseFloat(USDRaised)) * 100)}%`,
                                position: 'absolute',
                                top: '0px'
                              }}>
                            <h5 className="greenT gt mb-0 text-end">
                                <span class="valuye"  style={{position:'absolute', left:'0%', right:'0px', margin:'auto', top:'-43px', textAlign:'center'}}>$75,000</span>
                                <span class="line" style={{position:'absolute', left:'0%', right:'0px', margin:'auto', top:'-20px', height:'15px', width:'1px', background:'#fff'}}></span>
                                SmallCap
                            </h5>
                        </div>
                    </div>
                </div>
                */}
                <div className="whiteBox">
                    <div className="d-flex align-items-center mt-0 justify-content-between">
                        <div><h5 className="greenT gt"></h5></div>
                        <div><h5 className="greenT gt text-end">$75,000.00</h5></div>
                    </div>
                    <div className="loaderAni"><div style={{width: (parseFloat(USDRaised) / parseFloat(75000)) * 100 + '%'}}></div></div>
                    <div className='w-100' style={{position:'relative'}}>
                        <div className="d-flex align-items-center mt-2 justify-content-between" >
                            <div><h5 className="greenT gt mb-0"></h5></div>
                            <div><h5 className="greenT gt mb-0 text-end">Softcap</h5></div>
                        </div>
                        <div class="smallCap" style={{
                                left: `${((parseFloat(USDRaised) / parseFloat(75000)) * 100)}%`,
                                position: 'absolute',
                                top: '0px'
                              }}>
                            <h5 className="greenT gt mb-0 text-end">
                                <span class="valuye"  style={{position:'absolute', left:'0%', right:'0px', margin:'auto', top:'-43px', textAlign:'center'}}>${USDRaised}</span>
                                Raised
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="leftrightTop gt">
                    <div className="d-flex row">
                        <div className="col-6 col-sm-6 text-start">
                            <p>Current Price</p>
                            <h4 className="mb-0">${tokenPrice}</h4>
                        </div>
                        <div className="col-6 col-sm-6 text-end">
                            <p>Next Price</p>
                            <h4 className="mb-0">${parseFloat(tokenPrice) + parseFloat(0.001)}</h4>
                        </div>
                    </div>
                </div> 
                {
                    account ?
                    <>
                     <div className="ttHere">
                        <div className="ttSN d-flex justify-content-between flex-wrap gap-2">Token Bought : <b>{tokenFromBuy} MEDC</b></div>
                        <div className="ttSN d-flex justify-content-between flex-wrap gap-2">Reward Token : <b>{tokenFromReward} MEDC</b></div>
                        {
                            refundStatus ?
                            <>
                                <div className="ttSN d-flex justify-content-between flex-wrap gap-2">USDT Invested : <b>{USDTPaid} USDT</b></div>
                                <div className="ttSN d-flex justify-content-between flex-wrap gap-2">USDC Invested : <b>{USDCPaid} USDC</b></div>
                                <div className="ttSN d-flex justify-content-between flex-wrap gap-2">BNB Invested : <b>{BNBPaid} BNB</b></div>
                            </>
                            :
                            <>
                            </>
                        }
                    </div>
                    </>
                    :
                    <>
                    </>
                }
                {
                    !refundStatus && !claimStatus ?
                    <>
                    <div className="multiBtns d-flex align-items-center flex-wrap flex-md-nowrap">
                        <span  className={selectedCurrency== 'BNB' ? ' active border-btn-small' : 'border-btn-small' }><button onClick={() => { handleChangeCurrency('BNB') }}  className='btn small' ><img src="images/bnb.png" className="img-fluid"/> BNB</button></span>
                        <span  className={selectedCurrency=='USDT' ? ' active border-btn-small' : 'border-btn-small' }><button onClick={() => { handleChangeCurrency('USDT') }}  className='btn small'><img src="images/usdt.svg" className="img-fluid"/> USDT</button></span>
                        <span   className={selectedCurrency=='USDC' ? ' active border-btn-small' : 'border-btn-small' }><button onClick={() => { handleChangeCurrency('USDC') }} className='btn small'><img src="images/usdc.png" className="img-fluid" /> USDC</button></span>
                    </div>
                    <div className="calPresale d-flex gap-2">
                        <div className="calBox">
                            <img src="images/usdt.svg" className="img-fluid replaceCurrency"/>
                            <input type="number" placeholder="0.00" className="bg-transparent" value={usdtBuyAmount} onChange={(e) => { handleChangeUSDT(e.target.value) }}/>
                        </div>
                        <div className="calBox">
                            <img src="images/favicon.png" className="img-fluid calBoxLogo"/>
                            <input type="number" placeholder="0.00" className="bg-transparent" value={tokenBuyAmount} onChange={(e) => { handleChangeToken(e.target.value) }}/>
                        </div>
                    </div>
                    </>
                    :
                    <>
                    </>
                }
                <div className="bigBtn a_btns text-center mt-3">
                    {
                      account ? (
                        refundStatus ? (
                          <button className="mybtn d-flex gap-2 align-items-center w-100" onClick={claimRefund}>
                            <span>Claim Refund</span>
                          </button>
                        ) : claimStatus ? (
                          parseFloat(tokenFromBuy) > parseFloat(tokenClaimed) ? (
                            <button className="mybtn d-flex gap-2 align-items-center w-100" onClick={claimToken}>
                              <span>Claim Token</span>
                            </button>
                          ) : (
                            <button className="mybtn d-flex gap-2 align-items-center w-100" disabled>
                              <span>Claim Token</span>
                            </button>
                          )
                        ) : saleStatus ? (
                          approvedTokens >= usdtBuyAmount * 10 ** 18 && approvedTokens > 0 ? (
                            <button className="mybtn d-flex gap-2 align-items-center w-100" onClick={buyToken}>
                              <span>Buy Token</span>
                            </button>
                          ) : (
                            <button className="mybtn d-flex gap-2 align-items-center w-100" onClick={approveToken}>
                              <span>Approve & Buy Token</span>
                            </button>
                          )
                        ) : (
                          <button className="mybtn d-flex gap-2 align-items-center w-100" disabled>
                            <span>Presale Not Started</span>
                          </button>
                        )
                      ) : (
                        <button className="mybtn d-flex gap-2 align-items-center w-100" onClick={onConnect}>
                          <span>Buy Now</span>
                        </button>
                      )
                    }

                </div>
                 {
                    account && saleStatus ?  
                    <div className="ttHere">
                        <div class="ttSN address_wallet">
                            <p className="mb-1 text-start"><b>Referral Link:</b></p>
                            <div className=" d-flex gap-3 align-items-center justify-content-between">
                                <div className="copyHere text-start wordbreak"><span className='wordbreak'>https://medcoin.ai?referid={account}</span></div>
                                <div className="smallBtnBorder" title={`https://medcoin.ai?referid=${account}`} onClick={myCopy}>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                    </>
                }
            </div>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal">
          <div className="popupcenter text-center">
            <div className='edittext mb-2'> <h4 className="mb-1 Bold">Copied:</h4>
              <p>{copyaddress}</p>
            </div>
            <span className="border-btn-small d-block btns text-center ">
              <button className="btn small btn-primary " onClick={closeModal}>Close</button>
            </span>
          </div>
        </Modal>

        <TransactionStatus />
    </>
    );
};

export default Presale;