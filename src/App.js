import React, {useState} from "react";
import "./App.css";
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display.js';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers.js';
import Specials from './components/ButtonComponents/SpecialButtons/Specials.js';
import Operators from './components/ButtonComponents/OperatorButtons/Operators.js';
import './App.css';

function App() {

  const [displayValue, setDisplayValue] = useState("");
  const addNumber = (number) => {
    setDisplayValue(displayValue => displayValue + number);

  }

  const addSpecial = (special) => {
    setDisplayValue(displayValue => displayValue);

    if (special === 'C') {
      setDisplayValue(displayValue => ' ')
    }
    if (special === '+/-') {
      let neg = -1;
      if(displayValue){
        setDisplayValue(parseFloat(displayValue*neg))
      }
    }

    if(special === '%'){
      setDisplayValue(parseFloat(displayValue*.01))
    }
  }
  const addOperator = (operator) => {
    if (operator === "=") {
      setDisplayValue(displayValue => eval(displayValue).toFixed(2));
    } else {
      setDisplayValue(displayValue => displayValue + operator);
    }
  };

  return (<div className="container">
    <Logo/>
    <Display number={displayValue
        ? displayValue
        : 0}/>
    <div className='button-container'>

      <div className='butns-group'>

        <Specials addSpecial={addSpecial}/>
        <Numbers addNumber={addNumber}/>
      </div>

      <Operators addOperator={addOperator}/>

    </div>

  </div>);
}

export default App;
