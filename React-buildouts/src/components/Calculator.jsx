import { useState} from 'react';
function Calculator() {

    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    console.log(inputValue);


    const calculateHandler = () => {
        if(inputValue.length < 1){
            return setResult("Error");
        }
        if(inputValue === "0/0"){
            return setResult("NaN");
        }
        const calc = eval(inputValue);
        console.log(calc);
        setResult(calc);
    }
  return (
    <div className="container">
        <h3>React Calculator</h3>
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <div className="result">{result}</div>
        <div className="calc-layout">
            <div className="row1">
                <button onClick={() => setInputValue((prev) => prev + 7)}>7</button>
                <button onClick={() => setInputValue((prev) => prev + 8)}>8</button>
                <button onClick={() => setInputValue((prev) => prev + 9)}>9</button>
                <button onClick={() => setInputValue((prev) => prev + "+")}>+</button>
            </div>
            <div className="row2">
                <button onClick={() => setInputValue((prev) => prev + 4)}>4</button>
                <button onClick={() => setInputValue((prev) => prev + 5)}>5</button>
                <button onClick={() => setInputValue((prev) => prev + 6)}>6</button>
                <button onClick={() => setInputValue((prev) => prev + "-")}>-</button>
            </div>
            <div className="row3">
                <button onClick={() => setInputValue((prev) => prev + 1)}>1</button>
                <button onClick={() => setInputValue((prev) => prev + 2)}>2</button>
                <button onClick={() => setInputValue((prev) => prev + 3)}>3</button>
                <button onClick={() => setInputValue((prev) => prev + "*")}>*</button>
            </div>
            <div className="row4">
                <button onClick={() => setInputValue("")}>C</button>
                <button onClick={() => setInputValue((prev) => prev + 0)}>0</button>
                <button onClick={calculateHandler}>=</button>
                <button onClick={() => setInputValue((prev) => prev + "/")}>/</button>
            </div>
            </div>
    </div>
  )
}

export default Calculator;