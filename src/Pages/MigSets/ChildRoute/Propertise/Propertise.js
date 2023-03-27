import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


const Propertise = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showRun, setShowRun] = useState(false);
  const [showObjects, setShowObjects] = useState(false);
  return (
    <div >
      <div className="content_container">
        <div className="opentab_navbar">
          <div className="opentab_navigations">
            <NavLink
              to={"/migsets/migsets-route/properties/properties-details"}
              onClick={() => setShowDetails(!showDetails)}
              className={({ isActive }) =>
                isActive ? "opentab_navlink opentab_active" : "opentab_navlink"
              }
            >
              Details
            </NavLink>

            <NavLink
              to={"/migsets/migsets-route/properties/scan-run-selection"}
              onClick={() => setShowRun(!showRun)}
              className={({ isActive }) =>
                isActive ? "opentab_navlink opentab_active" : "opentab_navlink"
              }
            >
              Scan Run Selection
            </NavLink>

            <NavLink
              to={"/migsets/migsets-route/properties/exclution"}
              onClick={() => setShowObjects(!showObjects)}
              className={({ isActive }) =>
                isActive ? "opentab_navlink opentab_active" : "opentab_navlink"
              }
            >
              Exclutions
            </NavLink>
            <NavLink
              to={"advanced-filters"}
              onClick={() => setShowObjects(!showObjects)}
              className={({ isActive }) =>
                isActive ? "opentab_navlink opentab_active" : "opentab_navlink"
              }
            >
              Advanced filters
            </NavLink>
            <NavLink
              to={"/migsets/migsets-route/properties/object-preview"}
              onClick={() => setShowObjects(!showObjects)}
              className={({ isActive }) =>
                isActive ? "opentab_navlink opentab_active" : "opentab_navlink"
              }
            >
              Object Prview
            </NavLink>
          </div>
        </div>
        <Outlet />
       
      </div>
     
    </div>
  );
};

export default Propertise;
