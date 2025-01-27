import React from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

function ChooseCard() {

  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.2, 
    triggerOnce: true, 
  });

  const cards = [
    {
      title: t("home.chooseCard.card1.title"),
      desc: t("home.chooseCard.card1.desc"),
    },
    {
      title: t("home.chooseCard.card2.title"),
      desc: t("home.chooseCard.card2.desc"),
    },
    {
      title: t("home.chooseCard.card3.title"),
      desc: t("home.chooseCard.card3.desc"),
    },
    {
      title: t("home.chooseCard.card4.title"),
      desc: t("home.chooseCard.card4.desc"),
    },
  ];

  return (
    <div className="ccard" ref={ref}>
      <div className="ccard-cont">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`ccard-body ${inView ? "animate" : ""}`}
            style={{ transitionDelay: `${index * 0.3}s` }} 
          >
            <div className="circle"></div>
            <div className="ccard-text">
              <span className="ccard-title">{card.title}</span>
              <span className="ccard-desc">{card.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseCard;
