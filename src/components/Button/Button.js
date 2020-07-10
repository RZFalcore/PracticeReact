import React from 'react';
// MODULE !
import styles from './Button.module.css';

// const buttonStyles = {
//   display: 'inline-flex',
//   margin: '0 4px',
//   padding: '8px 24px',
//   border: 0,
//   borderRadius: 2,
//   fontSize: 14,
//   fontFamily: 'inherit',
// };

const Button = ({ type = 'button', label = 'BUTTON', disabled = true }) => {
  // const btnClasses = [styles.button];

  // if (disabled) {
  //   btnClasses.push(styles.disabled);
  // }
  // console.log(btnClasses);

  const btnClass = disabled ? styles.disabled : styles.active;

  return (
    <button
      type={type}
      disabled={disabled}
      // className={btnClasses.join(' ')}
      className={btnClass}
      //-------------------------------------------------------------------------
      // style={{
      //   ...buttonStyles,
      //   backgroundColor: disabled ? '#0000001f' : '#2196f3',
      //   color: disabled ? '#00000042' : '#ffffff',
      // }}
      //-------------------------------------------------------------------------
    >
      {label}
    </button>
  );
};

export default Button;
