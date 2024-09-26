import { useState } from "react";
import "./Faqs.css";
import { FAQs } from "../../db";
import { GrAdd } from "react-icons/gr";
import { FiMinus } from "react-icons/fi";

const Faqs = () => {
  const FaqItem = ({ faqData }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onBtnClick = () => {
      if (!isOpen) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    return (
      <div className="faqsQuestionAndAnswer">
        <div className="faqsQuestion" onClick={() => onBtnClick()}>
          <p>{faqData.question}</p>
          <button className="FaqBtn">
            {!isOpen ? <GrAdd /> : <FiMinus />}
          </button>
        </div>
        <div className={`faqsAnswer ${isOpen ? "open" : "closed"}`}>
          <p>{faqData.answer}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {FAQs.map((faq) => {
        return <FaqItem key={faq.id} faqData={faq} />;
      })}
    </>
  );
};

export default Faqs;
