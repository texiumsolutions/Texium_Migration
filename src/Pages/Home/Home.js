import React from "react";
import { NavBar } from "../../Shared/NavBar/NavBar";

export const Home = () => {
  return (
    <div style={{
      display:"flex"
    }}>
      <NavBar></NavBar>
      <h1 style={{
      width:"100%",
      height:"100%",
      marginLeft:"500px",
      padding:"100px"
    }}> 
        WELCOME!{" "}
        
         
            <small style={{color: "var(--primary)"}}>TEXIUM MIGRATION</small>
        
        
      </h1>
    </div>
  );
};
