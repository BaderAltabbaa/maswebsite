import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import OurProfiles from "./components/OurProfiles";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const [selectedComponent, setSelectedComponent] = useState("home");

  return (
    <div>
      <Navbar selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />
      <div>
        {selectedComponent === "home" && <Home />} 
        {selectedComponent === "ourProfile" && <OurProfiles />}
        {selectedComponent === "pricing" && <Pricing />}
        {selectedComponent === "services" && <Services />}
        {selectedComponent === "blog" && <Blog />}
        {selectedComponent === "portfolio" && <Portfolio />}
        {selectedComponent === "aboutUs" && <AboutUs />}
        {selectedComponent === "contactUs" && <ContactUs />}
        
      </div>
      <Footer selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />
    </div>
  );
};

export default App;
