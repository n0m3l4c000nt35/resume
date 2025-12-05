import React from "react";
import { RESUME_FILENAME } from "../data/translations";

export default function Content({ t, activeSection, language }) {
  const section = t.sections[activeSection];

  // Function to make URLs and emails clickable
  const renderContent = content => {
    if (activeSection !== "links" && activeSection !== "projects") {
      return content;
    }

    const lines = content.split("\n");
    return lines.map((line, index) => {
      // Check if line contains an email
      const emailMatch = line.match(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
      );
      if (emailMatch) {
        const email = emailMatch[0];
        const parts = line.split(email);
        return (
          <React.Fragment key={index}>
            {parts[0]}
            <a href={`mailto:${email}`}>{email}</a>
            {parts[1]}
            {"\n"}
          </React.Fragment>
        );
      }

      // Check if line contains a URL or PDF reference
      const urlMatch = line.match(/(https?:\/\/[^\s]+|\/[^\s]+\.pdf)/);
      if (urlMatch) {
        const url = urlMatch[0];
        const parts = line.split(url);

        // Check if it's the resume PDF
        if (url.includes(".pdf")) {
          return (
            <React.Fragment key={index}>
              {parts[0]}
              <a href={`/${RESUME_FILENAME}`} download={RESUME_FILENAME}>
                {url}
              </a>
              {parts[1]}
              {"\n"}
            </React.Fragment>
          );
        }

        return (
          <React.Fragment key={index}>
            {parts[0]}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
            {parts[1]}
            {"\n"}
          </React.Fragment>
        );
      }
      return line + "\n";
    });
  };

  return (
    <main>
      <article className="article">
        <h2 className="article-title">
          <em className="star">---</em> {section.title}{" "}
          <em className="star">---</em>
        </h2>

        <pre className="article-content">{renderContent(section.content)}</pre>
      </article>
    </main>
  );
}
