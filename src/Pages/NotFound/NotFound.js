import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
 
const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  
  return (
    <div
      style={{
        marginLeft: "500px",
        padding: "100px",
      }}
    >
      <h1>Oppps!!</h1>
      <h2>404 </h2>

      <Link to="from">BACK TO HOME</Link>
    </div>
  );
};

export default NotFound;
