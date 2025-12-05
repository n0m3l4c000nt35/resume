export default function Footer({ t }) {
  return (
    <footer className="footer">
      <p className="footer-text">
        {t.footer.madeBy}{" "}
        <a href="mailto:estebanzarateok@gmail.com">Esteban Zárate</a>
      </p>
    </footer>
  );
}
