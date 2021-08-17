import { useState } from "react";
import React from "react";

function Item({ name, category }) {
  const [ added, isAdded ] = useState(false)

  function handleCart() {
    isAdded(!added)
  }
  
  const buttonColor = added ? "remove" : "add"
  
  return (
    <li className={added ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className={buttonColor}>{added ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
