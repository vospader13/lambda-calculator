import React from "react";
import {specStyles} from "./specStyle.js";
// import {specStyle} from "./SpecStyles.js";
const SpecialButton = (props) => {
  return (
    <>

      <button style={specStyles.btns} className="num" onClick={() => {
        props.addSpecial(props.text)
      }} >
        {props.text}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;