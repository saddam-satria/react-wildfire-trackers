import React from 'react';
import notFoundStyle from './notfound.module.css'
import notFoundImg from './notfound.png'


const notFound = () => {
  return (
    <div>
      <div className={notFoundStyle.container}>
        <div className={notFoundStyle.notfound}>
          <img src={notFoundImg} alt="error screen" width="360" />
          <span>Page Not Found</span>
        </div>
      </div>
    </div>
  );
};

export default notFound;
