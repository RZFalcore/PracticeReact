import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

const ProductList = ({ items = [] }) => (
  <ul>
    {items.map(({ name, price, imgURL, id }) => (
      <li key={id}>
        <Product name={name} imgURL={imgURL} price={price} />
      </li>
    ))}
  </ul>
);

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductList;
