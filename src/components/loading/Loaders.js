import React from 'react';
import loadersStyle from './loaders.module.css';
import loadersImg from './loaders.gif';

const Loaders = () => {
  return (
    <div className={loadersStyle.container}>
      <div className={loadersStyle.loaders}> 
        <img src={loadersImg} alt="loading screen" width="160"/>
        <span>Wait a Moment</span>
      </div>
    </div>
  );
};

export default Loaders;
