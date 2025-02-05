import React from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

function BlockDevCard() {
  const { ref, inView } = useInView({
    threshold: 0.2, 
    triggerOnce: true, 
  });

  const { t } = useTranslation();

  const cards = [
    {
      title: t("blockChain.card.card1.title"),
      desc: t("blockChain.card.card1.desc"),
    },
    {
      title: t("blockChain.card.card2.title"),
      desc: t("blockChain.card.card2.desc"),
    },
    {
      title: t("blockChain.card.card3.title"),
      desc: t("blockChain.card.card3.desc"),
    },
    {
      title: t("blockChain.card.card4.title"),
      desc: t("blockChain.card.card4.desc"),
    },
  ];

  return (
    <div className="blockdev-card" ref={ref}>
      <div className="blockdev-card-cont">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`blockdev-card-body ${inView ? "animate" : ""}`}
            style={{ transitionDelay: `${index * 1}s` }} 
          >
            <div className="blockdev-card-text">
              <span className="blockdev-card-title">{card.title}</span>
              <span className="blockdev-card-desc">{card.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlockDevCard;
