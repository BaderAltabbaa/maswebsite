import React from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

function HowCard() {
  const { ref, inView } = useInView({
    threshold: 0.2, 
    triggerOnce: true, 
  });

  const { t } = useTranslation();

  const cards = [
    {
      title: t("home.howCard.card1.title"),
      desc: t("home.howCard.card1.desc"),
    },
    {
      title: t("home.howCard.card2.title"),
      desc: t("home.howCard.card2.desc"),
    },
    {
      title: t("home.howCard.card3.title"),
      desc: t("home.howCard.card3.desc"),
    },
    {
      title: t("home.howCard.card4.title"),
      desc: t("home.howCard.card4.desc"),
    },
  ];

  return (
    <div className="hcard" ref={ref}>
      <div className="hcard-cont">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`hcard-body ${inView ? "animate" : ""}`}
            style={{ transitionDelay: `${index * 0.2}s` }} 
          >
            <div className="hcard-text">
              <span className="hcard-title">{card.title}</span>
              <span className="hcard-desc">{card.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowCard;
