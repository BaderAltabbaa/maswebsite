import React from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const ProgressCard = () => {
  const { t } = useTranslation();
  const { ref: progressRef, inView: progressInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sideCards = t("aboutus.progressCard.sideCards", { returnObjects: true });

  return (
    <div className="progress-cont">
      <div
        className={`progress-card ${progressInView ? "animate-left" : ""}`}
        ref={progressRef}
      >
        <span className="progress-card-header">
          {t("aboutus.progressCard.header")}
        </span>
        <span className="progress-card-description">
          {t("aboutus.progressCard.description")}
        </span>

        {t("aboutus.progressCard.skills", { returnObjects: true }).map(
          (skill, index) => (
            <div className="progress-element" key={index}>
              <span>{skill}</span>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${[87, 64, 72, 91][index]}%` }}
                >
                  <span>{[87, 64, 72, 91][index]}%</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="side-cards-cont">
        {sideCards.map((card, index) => {
          const { title, desc } = card;
          const direction = index % 2 === 0 ? "left" : "right";
          const { ref: cardRef, inView: cardInView } = useInView({
            threshold: 0.2,
            triggerOnce: true,
          });

          return (
            <div
              key={index}
              className={`side-card-body ${
                cardInView ? `animate-${direction}` : ""
              }`}
              ref={cardRef}
            >
              <div className="side-card-text">
                <span className="side-card-title">{title}</span>
                <span className="side-card-desc">{desc}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressCard;
