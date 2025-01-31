import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Navbar({ selectedComponent, setSelectedComponent }) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState("en");

  const handleItemClick = (componentName) => {
    setSelectedComponent(componentName);
    setIsBurgerMenuOpen(false);
  };

  const handleResize = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (!mobile) {
      setIsBurgerMenuOpen(false);
    }
  };

  const switchLanguage = (lang) => {
    setActiveLang(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    "home",
    "aboutUs",
    "ourProfile",
    "contactUs",
    "blog",
    "portfolio",
    "pricing",
    "services",
  ];

  return (
    <div className="container">
      <div className="logo">
        <img
          src="cropped-LOGO-PNG-MAS-COMPANY1-300x132.webp"
          alt=""
          onClick={() => handleItemClick("home")}
        />
      </div>
      <div>
        {isMobile ? (
          <div className={`burger-menu ${isBurgerMenuOpen ? "open" : ""}`}>
            <div
              className="burger-menu-toggle"
              onClick={() => setIsBurgerMenuOpen((prev) => !prev)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            {isBurgerMenuOpen && (
              <div className="burger-menu-content">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className={`navbar-item ${
                      selectedComponent === item ? "active" : ""
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    {t(`navbar.${item}`)}
                  </div>
                ))}
                
                <div className="navbar-item language-switcher">
                  <span
                    onClick={() => switchLanguage("en")}
                    className={activeLang === "en" ? "active" : ""}
                  >
                     EN
                  </span>
                  <span>|</span>
                  <span
                    onClick={() => switchLanguage("ar")}
                    className={activeLang === "ar" ? "active" : ""}
                  >
                     AR
                  </span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="list">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`navbar-item ${
                  selectedComponent === item ? "active" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {t(`navbar.${item}`)}
              </div>
            ))}
            
            <div className="navbar-item language-switcher">
              <span
                onClick={() => switchLanguage("en")}
                className={activeLang === "en" ? "active" : ""}
              >
                🇪🇳
              </span>
              <span>|</span>
              <span
                onClick={() => switchLanguage("ar")}
                className={activeLang === "ar" ? "active" : ""}
              >
                  🇦🇷
              </span>
            </div>
          </div>
        )}
      </div>
      
           <a
        href="https://wa.me/905365439850"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default Navbar;
