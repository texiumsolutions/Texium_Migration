import React from "react";
import { FaPause, FaPlay, FaSquare } from "react-icons/fa";
import { IoReloadCircle } from "react-icons/io5";
import { Card } from "../../components/Card/Card";
import { FileInput } from "../../components/FileInput/FileInput";
import { NavBar } from "../../Shared/NavBar/NavBar";
import './Scanner.css';

export const Scanner = () => {
  return (
    <>
      <NavBar />
      <Card width={"calc(100vw - 80px - 5em)"} height={"calc(100vh - 5em)"}>
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
      </Card>
    </>
  );
};
