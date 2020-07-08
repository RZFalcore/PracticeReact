import React from 'react';

const Product = ({ imgURL, name, price, children }) => (
  <div>
    <img src={imgURL} alt={name} width="320" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
    <p>{children}</p>
  </div>
);

export default Product;
