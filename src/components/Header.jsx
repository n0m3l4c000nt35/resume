import React from "react";

export default function Header({ t, language, setLanguage }) {
  return (
    <header className="header">
      <div style={{ marginBottom: "1em" }}>
        <h1 className="header-title">
          <span className="header-name">{t.header.title}</span>
        </h1>
        <span className="header-subtitle">{t.header.subtitle}</span>
      </div>
      <div className="header-info">
        {t.header.phone}: +54 11 2277 1652 | {t.header.location}
      </div>
      <div className="language-selector">
        <span className="language-label">
          {language === "en" ? "Language:" : "Idioma:"}
        </span>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            setLanguage("en");
          }}
          className={`language-link ${language === "en" ? "active" : ""}`}
        >
          [{language === "en" ? "english" : "inglés"}]
        </a>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            setLanguage("es");
          }}
          className={`language-link ${language === "es" ? "active" : ""}`}
        >
          [{language === "en" ? "spanish" : "español"}]
        </a>
      </div>
    </header>
  );
}
