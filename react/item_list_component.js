// Question: You are building a React component that needs to fetch data from an API and display it. The data includes a list of items, and each item has a name and a description. The component should display each item in a card that shows the name and description. The component should also allow the user to click on a button to show or hide the description for each item. Write the React code for this component, including the fetch call to the API.



import React, { useState, useEffect } from 'react';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/items')
      .then(res => res.json())
      .then(data => setItems(data.items))
      .catch(err => console.error(err));
  }, []);

  const [showDescriptions, setShowDescriptions] = useState(false);

  const handleToggleDescriptions = () => {
    setShowDescriptions(!showDescriptions);
  };

  return (
    <div>
      <button onClick={handleToggleDescriptions}>
        {showDescriptions ? 'Hide Descriptions' : 'Show Descriptions'}
      </button>
      {items.map(item => (
        <div key={item.id} className="card">
          <h2>{item.name}</h2>
          {showDescriptions && <p>{item.description}</p>}
        </div>
      ))}
    </div>
  );
}

export default ItemList;
