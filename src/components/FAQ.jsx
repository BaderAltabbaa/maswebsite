import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();

  const faqData = t("faq.items", { returnObjects: true });

  const [expandedId, setExpandedId] = useState(null);

  const toggleAnswer = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="faq-container">
      {faqData.map((item) => (
        <div key={item.id} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleAnswer(item.id)}
          >
            <span>{item.question}</span>
            <i
              className={`arrow-icon ${
                expandedId === item.id
                  ? "fa-solid fa-chevron-up"
                  : "fa-solid fa-chevron-down"
              }`}
            ></i>
          </div>
          {expandedId === item.id && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
