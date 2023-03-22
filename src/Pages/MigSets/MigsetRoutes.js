import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../Shared/NavBar/NavBar";

const MigsetRoutes = () => {
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
                  to={"properties"}
                  onClick={() => setShowDetails(!showDetails)}
                  className={({ isActive }) =>
                    isActive
                      ? "opentab_navlink opentab_active"
                      : "opentab_navlink"
                  }
                >
                  Properties
                </NavLink>

                <NavLink
                  to={"transformation"}
                  onClick={() => setShowRun(!showRun)}
                  className={({ isActive }) =>
                    isActive
                      ? "opentab_navlink opentab_active"
                      : "opentab_navlink"
                  }
                >
                  Transformation
                </NavLink>

                <NavLink
                  to={"source-object"}
                  onClick={() => setShowObjects(!showObjects)}
                  className={({ isActive }) =>
                    isActive
                      ? "opentab_navlink opentab_active"
                      : "opentab_navlink"
                  }
                >
                  Source Object
                </NavLink>
                <NavLink
                  to={"target-object"}
                  onClick={() => setShowObjects(!showObjects)}
                  className={({ isActive }) =>
                    isActive
                      ? "opentab_navlink opentab_active"
                      : "opentab_navlink"
                  }
                >
                  Target Object
                </NavLink>
                <NavLink
                  to={"error-object"}
                  onClick={() => setShowObjects(!showObjects)}
                  className={({ isActive }) =>
                    isActive
                      ? "opentab_navlink opentab_active"
                      : "opentab_navlink"
                  }
                >
                  Error Object
                </NavLink>
              </div>
            </div>

            <Outlet />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MigsetRoutes;
