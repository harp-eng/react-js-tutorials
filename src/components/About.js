import React from "react";

export function About() {
  const features = [
    {
      title: "Text Editor",
      description:
        "Write, edit, and analyze text quickly in one place without switching tools.",
    },
    {
      title: "Word Counting",
      description:
        "Count words instantly for essays, articles, posts, descriptions, and content with word limits.",
    },
    {
      title: "Character Counting",
      description:
        "Check total characters for titles, messages, captions, and text fields with fixed limits.",
    },
    {
      title: "Uppercase",
      description:
        "Convert your text into capital letters for headings, labels, warnings, or strong emphasis.",
    },
    {
      title: "Lowercase",
      description:
        "Convert text into small letters to clean up unwanted capitalization and normalize content.",
    },
    {
      title: "Reading Time",
      description:
        "Estimate how long your text may take to read, making longer content easier to plan.",
    },
    {
      title: "Live Preview",
      description:
        "See the final output immediately after editing or formatting your text.",
    },
    {
      title: "More Utilities",
      description:
        "Helpful tools like clear text and copy text can make editing faster and easier.",
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <span className="about-kicker">Simple text tools</span>
        <h1>About Text Utils</h1>
        <p>
          Text Utils helps you format, inspect, and preview text quickly. It is
          useful for writing posts, notes, descriptions, essays, and everyday
          content where clean text matters.
        </p>
      </section>

      <section className="about-grid" aria-label="Text Utils features">
        {features.map((feature, index) => (
          <article className="about-feature" key={feature.title}>
            <span className="about-number">{index + 1}</span>
            <div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
