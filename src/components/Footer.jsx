import React from "react";

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <p className="footer-text">
        {t.footer.madeBy} <span className="footer-name">Esteban Zárate</span>
      </p>
    </footer>
  );
}
