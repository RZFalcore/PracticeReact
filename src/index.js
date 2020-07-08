import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Product from './components/product';
import Panel from './components/Panel';
import Profile from './components/Profile';

const link = React.createElement(
  'a',
  {
    href: 'https://reactjs.org/',
    target: '_blank',
  },
  'React Website',
);

console.log('Link: ', link);

const linkWithJSX = (
  <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
    React Website
  </a>
);

console.log('linkWithJSX: ', linkWithJSX);

//-----------------------------------------------------------------------------------------

const image = React.createElement('img', {
  src:
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
  alt: 'Tacos With Lime',
  width: 640,
});
const title = React.createElement('h2', null, 'Tacos With Lime');
const price = React.createElement('p', null, 'Price: 10.99$');
const button = React.createElement('button', { type: 'button' }, 'Add to cart');

const product = React.createElement('div', null, image, title, price, button);

console.log('product: ', product);

// ReactDOM.render(product, document.getElementById('root'));

//-----------------------------------------------------------------------------------------

const productJSX = (
  <div>
    <img
      src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      alt="Tacos With Lime"
      width="640"
    />
    <h2>Tacos With Lime</h2>
    <p>Price: 10.99$</p>
    <button type="button">Add to cart</button>
  </div>
);

console.log('productJSX: ', productJSX);

// ReactDOM.render(productJSX, document.getElementById('root'));

//-----------------------------------------------------------------------------------------
// COMPONENT + CHILDRENS

ReactDOM.render(
  <Fragment>
    <Panel title="Title">
      <Profile name="Mango" email="mail.com" />
    </Panel>
    <Product
      imgURL="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      name="Tacos With Lime"
      price="10.99"
    >
      Childrens!!
    </Product>
  </Fragment>,
  document.getElementById('root'),
);
