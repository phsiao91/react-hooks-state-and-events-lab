import React, { useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory,setCategory] = useState('All');

  function handleFilter(event) {
    setCategory(event.target.value);
  }

  const foodFilterDisplay = items.filter((food) => {
    if (selectedCategory === 'All') {
      return true;
    } else {
      return food.category === selectedCategory;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodFilterDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
