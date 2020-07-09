import React, { Fragment } from 'react';
import Panel from './Panel';
import Profile from './Profile';
import Mailbox from './Mailbox';
import Dropdown from './Dropdown';
import BookList from './Booklist';
import ProductList from './ProductList';

import products from './product.json';

const App = () => (
  <Fragment>
    <Panel title="Products">
      <ProductList items={products} />
    </Panel>

    <BookList books={favouriteBooks} />
    <Dropdown isOpen={false} />
    <Mailbox unreadMessages={[1, 2, 3, 4]} />
    <Profile name="Mango" email="mail.com" />
  </Fragment>
);

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
];

// {
//   const link = React.createElement(
//     'a',
//     {
//       href: 'https://reactjs.org/',
//       target: '_blank',
//     },
//     'React Website',
//   );

//   console.log('Link: ', link);

//   const linkWithJSX = (
//     <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
//       React Website
//     </a>
//   );

//   // console.log('linkWithJSX: ', linkWithJSX);

//   //-----------------------------------------------------------------------------------------

//   const image = React.createElement('img', {
//     src:
//       'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//     alt: 'Tacos With Lime',
//     width: 640,
//   });
//   const title = React.createElement('h2', null, 'Tacos With Lime');
//   const price = React.createElement('p', null, 'Price: 10.99$');
//   const button = React.createElement(
//     'button',
//     { type: 'button' },
//     'Add to cart',
//   );

//   const product = React.createElement('div', null, image, title, price, button);

//   console.log('product: ', product);

//   // ReactDOM.render(product, document.getElementById('root'));

//   //-----------------------------------------------------------------------------------------

//   const productJSX = (
//     <div>
//       <img
//         src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         alt="Tacos With Lime"
//         width="640"
//       />
//       <h2>Tacos With Lime</h2>
//       <p>Price: 10.99$</p>
//       <button type="button">Add to cart</button>
//     </div>
//   );

//   // console.log('productJSX: ', productJSX);

//   // ReactDOM.render(productJSX, document.getElementById('root'));

//   //-----------------------------------------------------------------------------------------
// }

export default App;
