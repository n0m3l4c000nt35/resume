import React from "react";

export default function Navigation({ t, activeSection, setActiveSection }) {
  const sections = Object.keys(t.sections);

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {sections.map(key => (
          <li key={key} className="nav-item">
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                setActiveSection(key);
              }}
              className={`nav-link ${activeSection === key ? "active" : ""}`}
            >
              [{t.nav[key]}]
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
