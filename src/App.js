import React, { useState } from "react";
import Keypad from "./components/keypad";
import Result from "./components/result";
import "./App.scss";
const App = () => {
  const [change, setChange] = useState({
    result: "",
  });

  // Membuat HandelButton
  const onClick = (button) => {
    if (button === "=") {
      calculate();
    } 
    else if (button === "AC") {
      reset();
    } 
    else if (button === "CE") {
      backspace();
    } 
    else {
      setChange({
        result: change.result + button,
      });
    }
  };

    // Membuat Hasil Kalkulator
  const calculate = () => {
    var checkResult = "";
    if (change.result.includes("--")) {
      checkResult = change.result.replace("--", "+");
    } else {
      checkResult = change.result;
    }

    try {
      setChange({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      setChange({
        result: "null",
      });
    }
  };

//   Membuat Fungsi Reset
  const reset = () => {
    setChange({
      result: "",
    });
  };

//   Membuat Fungsi Backspace
  const backspace = () => {
    setChange({
      result: change.result.slice(0, -1),
    });
  };

  return (
    <div className="calculator-body">
      <h1>Simple Calculator</h1>
      <Result result={change.result} />
      <Keypad onClick={onClick} />
    </div>
  );
};

export default App;
