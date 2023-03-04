import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        marginLeft: "500px",
        padding: "100px",
      }}
    >
      <h1>Oppps!!</h1>
      <h2>404 </h2>

      <Link to="/">BACK TO HOME</Link>
    </div>
  );
};

export default NotFound;
