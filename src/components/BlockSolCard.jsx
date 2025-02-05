import React from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

function BlockSolCard() {

  const { ref, inView } = useInView({
    threshold: 0.05, 
    triggerOnce: true, 
  });

  const { t } = useTranslation();

  const cards = [
    {
      title: t("blockChain.solcard.card1.title"),
      desc: t("blockChain.solcard.card1.desc"),
    },
    {
        title: t("blockChain.solcard.card2.title"),
        desc: t("blockChain.solcard.card2.desc"),
      },
      {
        title: t("blockChain.solcard.card3.title"),
        desc: t("blockChain.solcard.card3.desc"),
      },
      {
        title: t("blockChain.solcard.card4.title"),
        desc: t("blockChain.solcard.card4.desc"),
      },
      {
        title: t("blockChain.solcard.card5.title"),
        desc: t("blockChain.solcard.card5.desc"),
      },
      {
        title: t("blockChain.solcard.card6.title"),
        desc: t("blockChain.solcard.card6.desc"),
      },
      {
        title: t("blockChain.solcard.card7.title"),
        desc: t("blockChain.solcard.card7.desc"),
      },
      {
        title: t("blockChain.solcard.card8.title"),
        desc: t("blockChain.solcard.card8.desc"),
      },
      {
        title: t("blockChain.solcard.card9.title"),
        desc: t("blockChain.solcard.card9.desc"),
      },
      {
        title: t("blockChain.solcard.card10.title"),
        desc: t("blockChain.solcard.card10.desc"),
      },
      {
        title: t("blockChain.solcard.card11.title"),
        desc: t("blockChain.solcard.card11.desc"),
      },
      {
        title: t("blockChain.solcard.card12.title"),
        desc: t("blockChain.solcard.card12.desc"),
      },
    
  ];

  return (
    <div className="blocksol-card" ref={ref}>
      <div className="blocksol-card-cont">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`blocksol-card-body ${inView ? "animate" : ""}`}
            style={{ transitionDelay: `${index * 0.5}s` }} 
          >
            <div className="blocksol-card-text">
              <span className="blocksol-card-title">{card.title}</span>
              <span className="blocksol-card-desc">{card.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlockSolCard;
