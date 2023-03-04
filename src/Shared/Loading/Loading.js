import React from 'react';
import "./Loading.css";

const Loading = () => {
  return (
    <div className='container'>
      <div className='ring'></div>
      <div className='ring'></div>
      <div className='ring'></div>
      <span className='loading'>Loading.....</span>
    </div>
  );
};

export default Loading;