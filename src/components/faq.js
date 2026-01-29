import React, { useState } from 'react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is NexoFi, and how does it work?',
      answer: 'You can return any item within 30 days of purchase for a full refund.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship worldwide with additional shipping fees based on region.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach us at support@example.com or call 1-800-555-1234.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="FAQSec padSec" id='faq'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="text-center">
                <div className="labelH mb-3">
                  <div className="d-flex labelIN align-items-center">FAQ</div>
                </div>
                <h2 className="h2mY">Get answers to common questions</h2>
                <p className="subdecription">
                  From basics to advanced topics, find everything you need to know right here. Let us help you simplify the process and find the clarity you're looking
                </p>
              </div>

              <div className="mt-5 text-start">
                {faqs.map((faq, index) => (
                  <div className="borderfaq" key={index}>
                    <button
                      onClick={() => toggleFAQ(index)}
                      className=" text-start nobg d-flex justify-content-between w-100 align-items-center"
                    >
                      {faq.question}
                      <span>{openIndex === index ? <span className="minus plus"></span> : <span className=" plus"></span>}</span>
                    </button>
                    {openIndex === index && (
                      <p className="FAQans">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
