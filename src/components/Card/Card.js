import React from "react";
import "./Card.css";

export const Card = ({ width, height, children }) => {
  return (
    <div style={{ width: width, height: height }} className="card_container">
      {children}
    </div>
  );
};
