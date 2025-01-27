import React from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "./styles/contactus.css";

const ContactUs = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      id: 1,
      iconClass: "fa-solid fa-location-pin",
      title: t("contactUs.cards.0.title"),
      desc: t("contactUs.cards.0.desc"),
    },
    {
      id: 2,
      iconClass: "fa-solid fa-envelope",
      title: t("contactUs.cards.1.title"),
      desc: t("contactUs.cards.1.desc"),
    },
    {
      id: 3,
      iconClass: "fa-solid fa-phone",
      title: t("contactUs.cards.2.title"),
      desc: t("contactUs.cards.2.desc"),
    },
    {
      id: 4,
      iconClass: "fa-solid fa-user",
      title: t("contactUs.cards.3.title"),
      desc: t("contactUs.cards.3.desc"),
    },
  ];

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <div className="subpage-header">
        <div className="dis-cover"></div>
      </div>
      <div className="sub-header-content">
        <div className="sub-header-text">
          <span className="sub-header-text-1">
            {t("contactUs.header.title")}
          </span>
          <span className="sub-header-text-2">
            {t("contactUs.header.subtitle")}
          </span>
        </div>
      </div>

      <div className="touch-sec">
        <div className={`touch-top ${inView1 ? "animate" : ""}`} ref={ref1}>
          <div className="t-top-1">
            <span>{t("contactUs.touchSec.getInTouch")}</span>
            <span>{t("contactUs.touchSec.hesitateMsg")}</span>
          </div>

          <div className="t-top-2">
            <span>{t("contactUs.touchSec.followUs")}</span>
            <div className="soical-cont">
              <a href="https://www.facebook.com/masmarkeating/">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/mas_digital_marketing/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@masdigitalmarketing">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="touch-bottom">
          <div className="contact-cards">
            {cardData.map((card, index) => {
              const { ref, inView } = useInView({
                threshold: 0.1,
                triggerOnce: true,
              });

              return (
                <div
                  ref={ref}
                  key={card.id}
                  className={`contact-card-body ${
                    index % 2 === 0 ? "direction-left" : "direction-right"
                  } ${inView ? "animate" : ""}`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <i className={card.iconClass}></i>
                  <span className="contact-title">{card.title}</span>
                  <span className="contact-desc">{card.desc}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="message-sec">
        <div className={`message-cont ${inView2 ? "animate" : ""}`} ref={ref2}>
          <span className="msg-title">{t("contactUs.messageSec.title")}</span>
          <form>
            <div className="group1">
              <div className="name-cont">
                <label>{t("contactUs.messageSec.nameLabel")}</label>
                <input
                  className="msg"
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("contactUs.messageSec.namePlaceholder")}
                  required
                />
              </div>
              <div className="company-cont">
                <label>{t("contactUs.messageSec.companyLabel")}</label>
                <input
                  className="msg"
                  type="text"
                  id="company"
                  name="company"
                  placeholder={t("contactUs.messageSec.companyPlaceholder")}
                />
              </div>
            </div>

            <div className="group2">
              <div className="email-cont">
                <label>{t("contactUs.messageSec.emailLabel")}</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder={t("contactUs.messageSec.emailPlaceholder")}
                />
              </div>
              <div className="phone-cont">
                <label>{t("contactUs.messageSec.phoneLabel")}</label>
                <input
                  type="text"
                  id="phonee"
                  name="phone"
                  placeholder={t("contactUs.messageSec.phonePlaceholder")}
                />
              </div>
            </div>

            <div className="group3">
              <div className="subject-cont">
                <label>{t("contactUs.messageSec.subjectLabel")}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={t("contactUs.messageSec.subjectPlaceholder")}
                />
                <label>{t("contactUs.messageSec.messageLabel")}</label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  placeholder={t("contactUs.messageSec.messagePlaceholder")}
                />
              </div>
            </div>
          </form>
          <button className="msg-sub" type="submit">
            {t("contactUs.messageSec.submitButton")}
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
