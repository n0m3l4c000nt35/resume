import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./styles/App.css";
import { translations } from "./data/translations";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [language, setLanguage] = useState("en");

  const t = translations[language];

  return (
    <div className="portfolio">
      <Header t={t} language={language} setLanguage={setLanguage} />

      <Navigation
        t={t}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <Content t={t} activeSection={activeSection} language={language} />

      <Footer t={t} />
    </div>
  );
}
