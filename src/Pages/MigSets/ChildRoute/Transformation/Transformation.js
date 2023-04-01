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
            to={"/migsets/migsets-route/transformation/mapping-list"}
            onClick={() => setShowDetails(!showDetails)}
            className={({ isActive }) =>
              isActive ? "opentab_navlink opentab_active" : "opentab_navlink"
            }
          >
           All File 
          </NavLink>

          <NavLink
            to={"/migsets/migsets-route/transformation/source/:sourceId"}
            onClick={() => setShowRun(!showRun)}
            className={({ isActive }) =>
              isActive ? "opentab_navlink opentab_active" : "opentab_navlink"
            }
          >
            Mapping
          </NavLink>
          <NavLink
            to={"/migsets/migsets-route/transformation/transformation_source_object"}
            onClick={() => setShowRun(!showRun)}
            className={({ isActive }) =>
              isActive ? "opentab_navlink opentab_active" : "opentab_navlink"
            }
          >
            Source Data
          </NavLink>

          <NavLink
            to={"/migsets/migsets-route/transformation/transformation_target_object"}
            onClick={() => setShowObjects(!showObjects)}
            className={({ isActive }) =>
              isActive ? "opentab_navlink opentab_active" : "opentab_navlink"
            }
          >
           Target Data
          </NavLink>
          <NavLink
            to={"/migsets/migsets-route/transformation/transformation_injection"}
            onClick={() => setShowObjects(!showObjects)}
            className={({ isActive }) =>
              isActive ? "opentab_navlink opentab_active" : "opentab_navlink"
            }
          >
           Injection
          </NavLink>
        </div>
      </div>
      <Outlet />
     
    </div>
   
  </div>
  );
};

export default Transformation;