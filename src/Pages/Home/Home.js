import React from "react";
import { NavBar } from "../../Shared/NavBar/NavBar";

export const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1> 
        WELCOME!{" "}
        <small>
          <small>
            <small style={{color: "var(--primary)"}}>TEXIUM MIGRATION</small>
          </small>
        </small>
      </h1>
    </div>
  );
};
