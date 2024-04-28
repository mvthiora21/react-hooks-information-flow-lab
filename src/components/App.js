import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import Filter from "./Filter";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filteredItems = itemData.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />
      <ShoppingList items={filteredItems} />
      <Filter onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;