import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { NavBar } from '../../Shared/NavBar/NavBar';

const ImportDetails = () => {
  
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
            <Link className="opentab_back_btn" to={"/scanner"}>
              Back
            </Link>
            <p>File name</p>
          </div>

          <div className="opentab_navbar">
            <div className="opentab_navigations">
              <NavLink
                to={"details"}
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
                to={"selection"}
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
                to={"import-runs"}
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
              <button className="opentab_btn" type="button">Close</button>
              <button className="opentab_btn" type="button">Save & Run</button>
              <button className="opentab_btn opentab_save_btn" type="button">Save</button>
            </div>
          </div>

          <Outlet />
        </div>
      </Card>
    </div>
  </div>
  );
};

export default ImportDetails;