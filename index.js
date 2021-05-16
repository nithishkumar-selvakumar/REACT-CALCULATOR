import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
const Calc = () => {
  return (
    <>
      <br />
      <h2>
        <center>
          <i>React Calculator</i>
        </center>
      </h2>
      <br />
      <br />
      <div className="container my-4">
        <App />
      </div>
    </>
  );
};
ReactDOM.render(<Calc />, document.getElementById("root"));
