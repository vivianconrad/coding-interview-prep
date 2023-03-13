// You are building a React app that displays a list of products. Each product has a name, price, and image. You want to implement a feature that allows users to filter the products by price. Write a React component that fetches the product data from an API and displays the products. The component should also allow users to filter the products by price using a dropdown menu.

import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('https://api.example.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'under-10') {
      return product.price < 10;
    } else if (filter === '10-to-50') {
      return product.price >= 10 && product.price <= 50;
    } else if (filter === 'over-50') {
      return product.price > 50;
    }
  });

  return (
    <div>
      <h1>Product List</h1>
      <label htmlFor="filter">Filter by Price:</label>
      <select id="filter" value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="under-10">Under $10</option>
        <option value="10-to-50">$10 to $50</option>
        <option value="over-50">Over $50</option>
      </select>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <img src={product.image} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
