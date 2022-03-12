import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }
    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  const operatorType = (e) => {};

  const equals = (e) => {};

  const minusPlus = () => {};

  const percent = () => {};

  const reset = () => {};

  return (
    <div className="App">
      <h1> React JS Calculator App</h1>
      <div className="app-card">
        <div className="container">
          <div className="screen"></div>
          <div className="btn" onClick={reset}>
            AC
          </div>
          <div className="btn" onClick={percent}>
            %
          </div>
          <div className="btn" onClick={minusPlus}>
            +/-
          </div>
          <div className="btn" onClick={operatorType}>
            /
          </div>
          <div className="btn" onClick={inputNum}>
            7
          </div>
          <div className="btn" onClick={inputNum}>
            8
          </div>
          <div className="btn" onClick={inputNum}>
            9
          </div>
          <div className="btn" onClick={operatorType}>
            x
          </div>
          <div className="btn" onClick={inputNum}>
            4
          </div>
          <div className="btn" onClick={inputNum}>
            5
          </div>
          <div className="btn" onClick={inputNum}>
            6
          </div>
          <div className="btn" onClick={operatorType}>
            +
          </div>
          <div className="btn" onClick={inputNum}>
            1
          </div>
          <div className="btn" onClick={inputNum}>
            2
          </div>
          <div className="btn" onClick={inputNum}>
            3
          </div>
          <div className="btn" onClick={operatorType}>
            -
          </div>
          <div className="btn zero" onClick={inputNum}>
            0
          </div>
          <div className="btn" onClick={inputNum}>
            .
          </div>
          <div className="btn" onClick={equals}>
            =
          </div>
        </div>
      </div>
      <footer>
        Open sourced on{" "}
        <a
          href="https://github.com/KatyRosli/calculator-react"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          Github{" "}
        </a>
        by
        <a
          href="https://www.katyrosli.com"
          target="_blank"
          rel="nopener noreferrer"
          className="name"
        >
          {" "}
          Katy Rosli
        </a>
      </footer>
    </div>
  );
}
export default App;
