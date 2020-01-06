import React from "react";

const Display = (props) => {
  return (
    <div className="display">
      {props.number}
      {props.operators}

    </div>
  )
};

Display.defaultProps = {
  number: 0,
}

export default Display