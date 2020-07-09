import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ isOpen = false }) => (
  <div>
    <button type="button">{'BTN'}</button>
    {isOpen && (
      <div>
        <ul>
          <li>Option1</li>
          <li>Option2</li>
          <li>Option3</li>
          <li>Option4</li>
        </ul>
      </div>
    )}
  </div>
);

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
};

export default Dropdown;
