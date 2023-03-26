import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Transformation = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showRun, setShowRun] = useState(false);
  const [showObjects, setShowObjects] = useState(false);
  return (
    <div >
    <div className="content_container">
      <div className="opentab_navbar">
        <div className="opentab_navigations">
          <NavLink
            to={"/migsets/migsets-route/transformation/rules"}
            onClick={() => setShowDetails(!showDetails)}
            className={({ isActive }) =>
              isActive ? "opentab_navlink opentab_active" : "opentab_navlink"
            }
          >
           Rules
          </NavLink>

          <NavLink
            to={"/migsets/migsets-route/transformation/mapping-list"}
            onClick={() => setShowRun(!showRun)}
            className={({ isActive }) =>
              isActive ? "opentab_navlink opentab_active" : "opentab_navlink"
            }
          >
            Mapping List
          </NavLink>

          <NavLink
            to={"/migsets/migsets-route/transformation/association"}
            onClick={() => setShowObjects(!showObjects)}
            className={({ isActive }) =>
              isActive ? "opentab_navlink opentab_active" : "opentab_navlink"
            }
          >
            Association
          </NavLink>
          <NavLink
            to={"/migsets/migsets-route/transformation/demo"}
            onClick={() => setShowObjects(!showObjects)}
            className={({ isActive }) =>
              isActive ? "opentab_navlink opentab_active" : "opentab_navlink"
            }
          >
            Demo
          </NavLink>
        </div>
      </div>
      <Outlet />
     
    </div>
   
  </div>
  );
};

export default Transformation;