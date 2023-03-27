import React from "react";
import { Card } from "../../components/Card/Card";
import auth from "../../firebase.init";
import { NavBar } from "../../Shared/NavBar/NavBar";
import "./Home.css";

export const Home = () => {
  const displayName = auth.currentUser?.email;
  console.log(displayName);

  return (
    <div className="container">
      <div className="nav_container">
        <NavBar />
      </div>

      <div className="content_container">
        <Card height="calc(100%)" className="inter_card" width="calc(100%)">
          {displayName && <h3 className="content_container_h3">{displayName}  <img src="https://i.ibb.co/WBwFw0W/pexels-anastasiya-gepp-1462636.jpg" alt="" /></h3>}
          <div className="home_body">
          <h1 className="type_writer_h1 type_writer">Welcome To Texium Migration Platform !!!</h1>
          </div>
        
        </Card>
      </div>
    </div>
  );
};
