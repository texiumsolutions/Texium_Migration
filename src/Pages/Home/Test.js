import React from "react";
import "./Test.css";
import { FiPlay } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdExitToApp, MdOutlineWindow } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

const Test = () => {
  return (
    <div className="test">
    <div className="test_body">
    <div className="testing_navigation">
      <ul>
        <li className="testing_navigation">
          <a href="/">
            <span className="texting_icon">
              <FiPlay />
            </span>
            <span className="testing_text">Jobs</span>
          </a>
        </li>
        <li className="testing_navigation">
          <a href="/">
            <span className="texting_icon">
              <MdExitToApp />
            </span>
            <span className="testing_text">Scanner</span>
          </a>
        </li>
        <li className="testing_navigation">
          <a href="/">
            <span className="texting_icon">
              <MdOutlineWindow />
            </span>
            <span className="testing_text">Mig_Set</span>
          </a>
        </li>
        <li className="testing_navigation">
          <a href="/">
            <span className="texting_icon">
              <AiOutlineLogout />
            </span>
            <span className="testing_text">Imports</span>
          </a>
        </li>
        <li className="testing_navigation">
          <a href="/">
            <span className="texting_icon">
              <IoSettingsOutline />
            </span>
            <span className="testing_text">Configration</span>
          </a>
        </li>
      </ul>
    </div>
    </div>
    </div>
  );
};

export default Test;
