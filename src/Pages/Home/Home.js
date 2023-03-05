import React from "react";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../Shared/NavBar/NavBar";

export const Home = () => {
  return (
    <div className="container">
      <div className="nav_container">
        <NavBar />
      </div>
      
      <div className="content_container">
        <Card height="calc(100%)" width="calc(100%)">
          <h1>
            WELCOME!{" "}
            <small style={{ color: "var(--primary)" }}>
              <small>
                <small>
                  <small>TEXIUM MIGRATION</small>
                </small>
              </small>
            </small>
          </h1>
        </Card>
      </div>
    </div>
  );
};
