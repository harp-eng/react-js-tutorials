import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { TextForm } from "./components/TextForm";
import { About } from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar title="My App" about="About Us" />
      <div className="container my-3">
        <Routes>
          <Route
            path=""
            element={<TextForm heading="Enter the text to analyze" />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
