import React, { useState } from "react";

export function TextForm({ heading = "heading" }) {
  const [text, setText] = useState("");
  const [copyLabel, setCopyLabel] = useState("Copy Text");

  const words = text.trim() === "" ? [] : text.trim().split(/\s+/);
  const wordCount = words.length;
  const characterCount = text.length;
  const sentenceCount =
    text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(Boolean).length;
  const readingTime = Math.max(wordCount * 0.008, text ? 0.01 : 0).toFixed(2);

  const convertToUppercase = () => {
    setText(text.toUpperCase());
  };

  const convertToLowercase = () => {
    setText(text.toLowerCase());
  };

  const capitalizeWords = () => {
    const newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
  };

  const removeExtraSpaces = () => {
    setText(text.trim().split(/\s+/).join(" "));
  };

  const clearText = () => {
    setText("");
    setCopyLabel("Copy Text");
  };

  const copyText = async () => {
    if (!text) {
      return;
    }

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setCopyLabel("Copied");
    setTimeout(() => setCopyLabel("Copy Text"), 1500);
  };

  return (
    <div className="text-tool">
      <section className="text-tool-header">
        <span className="text-tool-kicker">Text workspace</span>
        <h1>{heading}</h1>
        <p>
          Type or paste your text below, then use the tools to format, clean,
          copy, and analyze it instantly.
        </p>
      </section>

      <div className="text-tool-layout">
        <section className="text-editor-panel" aria-label="Text editor">
          <textarea
            className="form-control text-editor"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
              setCopyLabel("Copy Text");
            }}
            placeholder="Enter your text here..."
          ></textarea>

          <div className="tool-actions">
            <button
              className="btn btn-primary"
              disabled={!text}
              onClick={convertToUppercase}
            >
              Uppercase
            </button>
            <button
              className="btn btn-primary"
              disabled={!text}
              onClick={convertToLowercase}
            >
              Lowercase
            </button>
            <button
              className="btn btn-outline-primary"
              disabled={!text}
              onClick={capitalizeWords}
            >
              Capitalize
            </button>
            <button
              className="btn btn-outline-primary"
              disabled={!text}
              onClick={removeExtraSpaces}
            >
              Remove Spaces
            </button>
            <button
              className="btn btn-outline-success"
              disabled={!text}
              onClick={copyText}
            >
              {copyLabel}
            </button>
            <button
              className="btn btn-outline-danger"
              disabled={!text}
              onClick={clearText}
            >
              Clear
            </button>
          </div>
        </section>

        <aside className="text-summary-panel" aria-label="Text summary">
          <h2>Your Text Summary</h2>
          <div className="summary-grid">
            <div className="summary-card">
              <span>{wordCount}</span>
              <p>Words</p>
            </div>
            <div className="summary-card">
              <span>{characterCount}</span>
              <p>Characters</p>
            </div>
            <div className="summary-card">
              <span>{sentenceCount}</span>
              <p>Sentences</p>
            </div>
            <div className="summary-card">
              <span>{readingTime}</span>
              <p>Minutes</p>
            </div>
          </div>

          <div className="preview-box">
            <h3>Preview</h3>
            <p>{text || "Your text preview will appear here."}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
