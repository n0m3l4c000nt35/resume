export default function Content({ t, activeSection, language }) {
  const section = t.sections[activeSection];

  return (
    <main>
      <article className="article">
        <h2 className="article-title">
          <em className="star">---</em> {section.title}{" "}
          <em className="star">---</em>
        </h2>

        <pre className="article-content">{section.content}</pre>

        {activeSection === "links" && (
          <div className="download-section">
            <a
              href="/esteban_zarate.pdf"
              download="Esteban_Zarate_Resume.pdf"
              className="download-button"
            >
              {language === "en"
                ? "⬇ Download Resume (PDF)"
                : "⬇ Descargar Currículum (PDF)"}
            </a>
          </div>
        )}
      </article>
    </main>
  );
}
