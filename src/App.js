import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Swal from "sweetalert2";
import Web3 from "web3";
import Context from './context/context';
import { EthereumProvider } from "@walletconnect/ethereum-provider";
import Reactconnectwallet from './reactwallet/reactconnectwallet';
import Index from './pages/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet/style.css';
import Affiliate from "./pages/affiliate/Affiliate";
import Translator from "./components/Translator";
import ClaimRefund from "./pages/claim-refund/ClaimRefund";
import HowToBuy from "./pages/how-to-buy/HowToBuy";

function App() {
   const [modalIsOpen, setIsOpen] = useState(false);
   const [providers, setProviders] = useState();
   const [account, setAccount] = useState();
   const projectId = '376766ad58cb967480dae7850898ae28';
   let provider;

   async function reactconnectwalletModal() {
      setIsOpen(true);
   }

   async function onMetamaskConnect() {
      await setIsOpen(false);
      try {
         await window.ethereum.request({ method: 'eth_requestAccounts' });
         provider = window.ethereum;
         await setProviders(provider);
         await window.ethereum.enable();
         provider.on("accountsChanged", (account) => {
            setAccount(account[0]);
         });
         provider.on("chainChanged", (chainId) => {
            if (parseInt(chainId) != '56') {
               Swal.fire({
                  title: "Error Found",
                  text: 'Make Sure You Are Using The BNB Network',
                  type: "error",
                  showCancelButton: false,
                  confirmButtonClass: "btn-danger",
                  confirmButtonText: "Ok",
                  closeOnConfirm: false,
                  showCloseButton: true,
               });
            }
         });
         await init();
      } catch (e) {
         console.log("Could not get a metamask connection", e);
      }
   }

   async function onWalletConnect() {
      await setIsOpen(false);
      try {
         provider = await EthereumProvider.init({
            projectId,
            showQrModal: true,
            qrModalOptions: {
               themeMode: "light",
               explorerRecommendedWalletIds: [
                  "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
                  "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
               ],
               explorerExcludedWalletIds: "ALL",
            },
            chains: [56]
         });
         await setProviders(provider);
         await provider.enable();
         provider.on("accountsChanged", (account) => {
            setAccount(account[0]);
         });
         provider.on("chainChanged", (chainId) => {
            if (parseInt(chainId) != '56') {
               Swal.fire({
                  title: "Error Found",
                  text: 'Make Sure You Are Using The BNB Network',
                  type: "error",
                  showCancelButton: false,
                  confirmButtonClass: "btn-danger",
                  confirmButtonText: "Ok",
                  closeOnConfirm: false,
                  showCloseButton: true,
               });
            }
         });
         await init();
      } catch (e) {
         console.log("Could not get a wallet connection", e);
         return;
      }
   }

   async function onConnect() {
      setIsOpen(true);
   }
   async function init() {
      let web3 = new Web3(provider);
      let account = await web3.eth.getAccounts();
      setAccount(account[0]);
      let chainId = await web3.eth.getChainId();
      if (parseInt(chainId) != '56') {
         Swal.fire({
            title: "Error Found",
            text: 'Make Sure You Are Using The BNB Network',
            type: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
         });
      }
   }
   return (
      <>
         <Context.Provider value={{ account, onConnect, providers }}>
            <Router>
               <Routes>
                  <Route path='/' element={<Index />} />
                  {/* <Route path='/affiliate' element={<Affiliate />} /> */}
                  {/* <Route path='/claim-refund' element={<ClaimRefund />} /> */}
                  <Route path='/how-to-buy' element={<HowToBuy />} />
               </Routes>
            </Router>
         </Context.Provider>
         <Translator />
         <Reactconnectwallet onWalletConnect={onWalletConnect} onMetamaskConnect={onMetamaskConnect} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      </>
   );
}

export default App;