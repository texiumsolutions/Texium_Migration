import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Card } from "../../../components/Card/Card";
import { NavBar } from "../../../Shared/NavBar/NavBar";
import "./OpenTab.css";
import { OpenTabDetails } from "./OpenTabDetails/OpenTabDetails";
import { OpenTabObjects } from "./OpenTabObjects/OpenTabObjects";
import { OpenTabRun } from "./OpenTabRun/OpenTabRun";

export const OpenTab = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showRun, setShowRun] = useState(false);
  const [showObjects, setShowObjects] = useState(false);

  return (
    <div className="container">
      <div className="nav_container">
        <NavBar />
      </div>

      <div className="content_container">
        <Card height="calc(100%)" width="calc(100%)">
          <div>
            <div className="opentab_header">
              <Link className="opentab_back_btn" to={"#"}>
                Back
              </Link>
              <p>File name</p>
            </div>

            <div className="opentab_navbar">
              <div className="opentab_navigations">
                <NavLink
                  to={"/scanner/openTab/details"}
                  onClick={() => setShowDetails(!showDetails)}
                  className={({ isActive }) =>
                    isActive
                      ? "opentab_navlink opentab_active"
                      : "opentab_navlink"
                  }
                >
                  Details
                </NavLink>

                <NavLink
                  to={"/scanner/openTab/run"}
                  onClick={() => setShowRun(!showRun)}
                  className={({ isActive }) =>
                    isActive
                      ? "opentab_navlink opentab_active"
                      : "opentab_navlink"
                  }
                >
                  Scan Runs
                </NavLink>

                <NavLink
                  to={"/scanner/openTab/objects"}
                  onClick={() => setShowObjects(!showObjects)}
                  className={({ isActive }) =>
                    isActive
                      ? "opentab_navlink opentab_active"
                      : "opentab_navlink"
                  }
                >
                  Source Objects
                </NavLink>
              </div>

              <div className="opentab_buttons">
                <button type="button">Close</button>
                <button type="button">Save & Run</button>
                <button type="button">Save</button>
              </div>
            </div>

            {showDetails ? <OpenTabDetails /> : null}

            {showRun ? <OpenTabRun /> : null}

            {showObjects ? <OpenTabObjects /> : null}
          </div>
        </Card>
      </div>
    </div>
  );
};
