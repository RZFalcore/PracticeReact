import React from 'react';
import PropTypes from 'prop-types';

// const Product = ({ imgURL, name, price = 1, children }) => (
const Product = ({ imgURL, name, price = 1 }) => (
  <div>
    <img src={imgURL} alt={name} width="320" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

Product.defaultProps = {
  alt: 'Product image',
};

Product.propTypes = {
  imgURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  // children: PropTypes.string.isRequired,
};

export default Product;
