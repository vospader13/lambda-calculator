import React from "react";
import {numStyles} from './numStyle.js'
const NumberButton = (props) => {

  return (

    <>

      <button style={numStyles.btns} className="num" onClick={() => {
        props.addNumber(props.text)
      }} >
        {props.text}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;