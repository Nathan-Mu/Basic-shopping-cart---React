import React from "react";

const Counter = props => {
  return (
    <div>
      <span>props.name</span>
      <span>props.amount</span>
      <button>+</button>
      <button>-</button>
      <button>X</button>
    </div>
  );
};

export default Counter;
