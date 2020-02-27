import React from "react";

const TotalAmount = props => {
  let total = 0;
  props.products.forEach(product => (total += product.price * product.number));
  return <p>{total}</p>;
};

export default TotalAmount;
