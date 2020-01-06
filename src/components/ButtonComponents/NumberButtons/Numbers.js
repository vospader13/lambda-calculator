import React, { useState } from "react";
import NumberButton from './NumberButton.js';
import { numbers } from '../../../data.js';
import {numStyles} from './numStyle.js'

const Numbers = (props) => {

  const [numberState, setNumberState] = useState(numbers);
  return (
    <div style={numStyles.numButtons}>
      {numberState.map((number,index) => {
        return (
          <NumberButton key={index} text={number} addNumber={props.addNumber} />
        )
      })}

    </div>
  );
};

export default Numbers;