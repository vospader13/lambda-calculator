import React from "react";
import OperatorButton from './OperatorButton.js';
import { operators } from '../../../data.js';
import {oppStyles} from "./oppStyle.js";

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div style={oppStyles.oppButtons}>
      {operators.map((operator,index) =>
        <OperatorButton key={index} text={operator} addOperator={props.addOperator} />
      )}

    </div>
  );
};

export default Operators;