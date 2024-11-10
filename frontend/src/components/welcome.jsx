import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./welcome.css";

function Welcome() {
  return (
    <div className="background-container">
      <div className="welcome-container">
        <h1>
          Welcome to <span>MedSync</span>
        </h1>
        <p>Click the button below to submit patient information.</p>
        <Link to="/submission">
          <button className="button">Go to Submission Form</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
