import React from "react";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../Shared/NavBar/NavBar";
import "./Jobs.css";

export const Jobs = () => {
  return (
    <div className="container">
      <div className="nav_container">
        <NavBar />
      </div>
      
      <div className="content_container">
        <Card height="calc(100%)" width="calc(100%)">
          <h1>
            Jobs
          </h1>
        </Card>
      </div>
    </div>
  );
};
