import React from "react";
import ItemList from "./ItemList";

function App() {
  const items = ["Apple", "Banana", "Orange"];

  return (
    <div>
      <h1>My Shopping List</h1>
      <ItemList items={items} />
    </div>
  );
}
