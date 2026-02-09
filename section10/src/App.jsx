import { useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [calculate, setCalculate] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const onClickCalculate = (e) => {
    console.log("op:", e.target.value);
    console.log("num1, num2:", num1, num2);

    let sum = 0;
    switch (e.target.value) {
      case "+":
        sum = Number(num1) + Number(num2);
        break;
      case "-":
        sum = Number(num1) - Number(num2);

        break;
      case "*":
        sum = Number(num1) * Number(num2);

        break;
      case "/":
        sum = Number(num1) / Number(num2);

        break;
    }
    setCalculate(sum);
  };
  const onChangeNum = (e) => {
    switch (e.target.name) {
      case "num1":
        setNum1(Number(e.target.value));

        break;
      case "num2":
        setNum2(Number(e.target.value));

        break;
    }
  };

  return (
    <>
      <div>
        <h1>계산기</h1>
      </div>
      <Viewer calculate={calculate} />
      <Controller
        onClickCalculate={onClickCalculate}
        onChangeNum={onChangeNum}
        num1={num1}
        num2={num2}
      />
    </>
  );
}

export default App;
