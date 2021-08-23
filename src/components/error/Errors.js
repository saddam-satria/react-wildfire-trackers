import React from 'react';
import errosStyle from './errors.module.css';
import errorImg from './error.png';


const Errors = () => {
  return (
    <div className={errosStyle.container}>
      <div className={errosStyle.errors}>
        <img src={errorImg} alt="error screen" width="360" />
        <span>We Are Sorry have an error</span>
      </div>
    </div>
  );
};

export default Errors;
