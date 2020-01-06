import React from "react";
import SpecialButton from './SpecialButton.js';
import { specials } from '../../../data.js';
import {specStyles} from "./specStyle.js";
const Specials = (props) => {


  return (
    <div style={specStyles.specButtons}>
      {specials.map((special,index) =>
        <SpecialButton key={index} text={special} addSpecial={props.addSpecial}/>
      )}

    </div>
  );
};

export default Specials