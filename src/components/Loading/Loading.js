import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading_container">
      <div className="loading_ring"></div>
      <div className="loading_ring"></div>
      <div className="loading_ring"></div>
      <span className="loading">LOADING</span>
    </div>
  );
};

export default Loading;
