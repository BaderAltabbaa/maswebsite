import React from "react";
import { useTranslation } from 'react-i18next';

function Footer({ selectedComponent, setSelectedComponent }) {
  const { t } = useTranslation();

  const handleItemClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div className="footer">
      <div className="left">
        <div className="footer-list">
          {["home", "aboutUs", "ourProfile", "contactUs", "blog", "portfolio", "pricing", "services"].map((item) => (
            <div
              key={item}
              className={`ft navbar-item ${selectedComponent === item ? "active" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              {t(`navbar.${item}`)} 
            </div>
          ))}
        </div>
      </div>

      <div className="middle">
        <div className="logo-footer">
          <img src="cropped-LOGO-PNG-MAS-COMPANY1-300x132.webp" onClick={() => handleItemClick("home")} />
        </div>
        <div className="year">
          <span>{t("footer.copyright", { year: new Date().getFullYear() })}</span>
        </div>
        <div className="mid-icons">
          <a href="https://www.facebook.com/masmarkeating/" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/mas_digital_marketing/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@masdigitalmarketing" target="_blank">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>

      <div className="right">
        <i className="fa fa-phone" id="phone"></i>
        <span className="support">{t("footer.support")}</span>
        <span className="number">+905365439850</span>
      </div>
    </div>
  );
}

export default Footer;
