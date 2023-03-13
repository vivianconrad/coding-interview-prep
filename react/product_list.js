// You are building a React app that displays a list of products. Each product has a name, price, and image. You want to implement a feature that allows users to filter the products by price. Write a React component that fetches the product data from an API and displays the products. The component should also allow users to filter the products by price using a dropdown menu.

import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  return (
    <div>
      <h1>Product List</h1>
      <p>Items in cart: {cart.length}</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <img src={product.image} alt={product.name} />
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

