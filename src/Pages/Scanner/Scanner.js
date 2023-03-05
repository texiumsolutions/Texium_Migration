import React from "react";
import { FaPause, FaPlay, FaSquare } from "react-icons/fa";
import { IoReloadCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { FileInput } from "../../components/FileInput/FileInput";
import { NavBar } from "../../Shared/NavBar/NavBar";
import "./Scanner.css";

export const Scanner = () => {
  return (
    <div className="container">
      <div className="nav_container">
        <NavBar />
      </div>

      <div className="content_container">
        <Card height="calc(100%)" width="calc(100%)">
          <div className="table_header">
            <button type="button">
              <FaPlay />
            </button>
            <button type="button">
              <FaPause />
            </button>
            <button type="button">
              <FaSquare />
            </button>

            <button className="reload_btn" type="button">
              <IoReloadCircle />
            </button>
          </div>

          <FileInput />

          <Link to={"/scanner/openTab"}>GO</Link>
        </Card>
      </div>

      {/* <Outlet /> */}
    </div>
  );
};
