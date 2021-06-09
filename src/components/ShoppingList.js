import { React, useState } from "react";
import Item from "./Item";
import items from "../data/items"

function ShoppingList({ items }) {
  let [selectedCategory, setFilterBy] = useState("All")

  const groceriesToDisplay = items.filter((grocery) => {
    console.log(selectedCategory)
    if (selectedCategory === "All") {
      return true;
    } else {
      return grocery.category === selectedCategory;
    }
  })

  function handleCategoryChange(event) {
    setFilterBy(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {groceriesToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
