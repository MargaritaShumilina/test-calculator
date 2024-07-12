import {useState} from "react";
import { evaluate, round } from "mathjs";

import './App.css';
import {values} from "./constants/constants";
import InputScreen from "./InputScreen/InputScreen";
import Button from "./Button/Button";

function App() {
    const [input, setInput] = useState("");
    const [answer, setAnswer] = useState(0);

    const inputHandler = (value) => {
        if (answer === "Result Error") return;
        let str = input + value;
        if (str.length > 14) return;
        if (answer !== 0) {
            setInput(answer + value);
            setAnswer("");
        } else setInput(str);
    };

    const calculateAns = () => {
        if (input === "") return;
        let result = 0;
        let finalexpression = input;
        finalexpression = finalexpression.replaceAll("х", "*");
        let noSqrt = input.match(/√[0-9]+/gi);
        if (noSqrt !== null) {
            let evalSqrt = input;
            for (let i = 0; i < noSqrt.length; i++) {
                evalSqrt = evalSqrt.replace(
                    noSqrt[i],
                    `sqrt(${noSqrt[i].substring(1)})`
                );
            }
            finalexpression = evalSqrt;
        }

        try {
            result = evaluate(finalexpression); //mathjs
        } catch (error) {
            result =
                error.message === "Result Error";
        }
        isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
    };
    const clearInput = () => {
        setInput("");
        setAnswer(0);
    };


    return (
    <div className="root">
        <div className="calculator">
            <InputScreen inputValue={input} totalValue={answer}/>
            <div className="calculator__buttons">
              {values.map(value => {
                  return (
                <Button key={value} value={value} onClickFunction={value === '=' ? calculateAns : value === 'C' ? clearInput : inputHandler}/>
              )})}
            </div>
        </div>
    </div>
  );
}

export default App;
