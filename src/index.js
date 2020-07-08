import React from 'react';
import ReactDOM from 'react-dom';

// const link = React.createElement(
//   'a',
//   {
//     href: 'https://reactjs.org/',
//     target: '_blank',
//   },
//   'React Website',
// );

// console.log(link);

// const linkWithJSX = (
//   <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
//     React Website
//   </a>
// );

// console.log(linkWithJSX);

//-----------------------------------------------------------------------------------------

// const image = React.createElement('img', {
//   src:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//   alt: 'Tacos With Lime',
//   width: 640,
// });
// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10.99$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// const product = React.createElement('div', null, image, title, price, button);

// console.log(product);

// ReactDOM.render(product, document.getElementById('root'));

//-----------------------------------------------------------------------------------------

// const productJSX = (
//   <div>
//     <img
//       src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       alt="Tacos With Lime"
//       width="640"
//     />
//     <h2>Tacos With Lime</h2>
//     <p>Price: 10.99$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// ReactDOM.render(productJSX, document.getElementById('root'));

//-----------------------------------------------------------------------------------------
// COMPONENT

const Product = props => (
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

ReactDOM.render(<Product />, document.getElementById('root'));
