import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [res, resfunc] = useState("");

  const Handleclick = (e) => {
    resfunc(res.concat(e.target.name));
  };

  const AcHandleclick = () => {
    resfunc("");
  };

  const Equal = () => {
    resfunc(eval(res).toString());
  };

  const backspace = () => {
    resfunc(res.slice(0, res.length - 1));
  };
  console.log(res);
  return (
    <>
      <div className="calculator card">
        <input
          type="text"
          className="calculator-screen z-depth-1"
          value={res}
        />
        <div className="calculator-keys">
          <button
            className="operator btn btn-info"
            name="+"
            onClick={Handleclick}
          >
            +
          </button>
          <button
            className="operator btn btn-info"
            name="-"
            onClick={Handleclick}
          >
            -
          </button>
          <button
            className="operator btn btn-info"
            name="*"
            onClick={Handleclick}
          >
            &times;
          </button>
          <button
            className="operator btn btn-info"
            name="/"
            onClick={Handleclick}
          >
            &divide;
          </button>

          <button
            className="btn btn-light waves-effect"
            name="1"
            onClick={Handleclick}
          >
            1
          </button>
          <button
            className="btn btn-light waves-effect"
            name="2"
            onClick={Handleclick}
          >
            2
          </button>
          <button
            className="btn btn-light waves-effect"
            name="3"
            onClick={Handleclick}
          >
            3
          </button>

          <button
            className="btn btn-light waves-effect"
            name="4"
            onClick={Handleclick}
          >
            4
          </button>
          <button
            className="btn btn-light waves-effect"
            name="5"
            onClick={Handleclick}
          >
            5
          </button>
          <button
            className="btn btn-light waves-effect"
            name="6"
            onClick={Handleclick}
          >
            6
          </button>

          <button
            className="btn btn-light waves-effect"
            name="7"
            onClick={Handleclick}
          >
            7
          </button>
          <button
            className="btn btn-light waves-effect"
            name="8"
            onClick={Handleclick}
          >
            8
          </button>
          <button
            className="btn btn-light waves-effect"
            name="9"
            onClick={Handleclick}
          >
            9
          </button>

          <button
            className="btn btn-light waves-effect"
            name="0"
            onClick={Handleclick}
          >
            0
          </button>
          <button
            className="btn btn-light waves-effect"
            name="."
            onClick={Handleclick}
          >
            .
          </button>
          <button
            className="btn btn-light waves-effect"
            name="AC"
            onClick={backspace}
          >
            C
          </button>

          <button
            className="c-sign operator  operator btn btn-info"
            onClick={AcHandleclick}
          >
            AC
          </button>

          <button
            className="equal-sign operator  operator btn btn-info"
            name="="
            onClick={Equal}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};
export default App;
