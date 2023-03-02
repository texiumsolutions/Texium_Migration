import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavigationLink = ({ icon, routePath, onClick = null }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "route_btn active" : "route_btn"
      }
      to={routePath}
      onClick={() => onClick?.(routePath)}
    >
      <button className="route_btn" type="button">
        <div className="navbar_icon">{icon}</div>
      </button>
    </NavLink>
  );
};
