import { React, useState } from "react";

function Item({ name, category }) {
  let [itemAdded, addItem] = useState("")

  const addToCart = () => {
    addItem(itemAdded = "in-cart")
  }
  
  return (
    <li className={itemAdded}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
