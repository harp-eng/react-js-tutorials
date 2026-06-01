import React, { useState } from "react";

export function TextForm({ heading = "heading" }) {
  const [text, setText] = useState("");
  const Uppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  return (
    <div>
      <div className="container">
        <h1>{heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={Uppercase}>
          Convert to Uppercase
        </button>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{(0.008 * text.length).toFixed(2)} minutes to read</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
