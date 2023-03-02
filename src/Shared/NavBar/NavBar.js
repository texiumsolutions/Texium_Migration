import React from "react";
import { AiOutlineLogout, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FiPlay } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdExitToApp, MdOutlineWindow } from "react-icons/md";
import "./NavBar.css";
import { NavigationLink } from "./NavigationLink";

export const NavBar = () => {
  return (
    <div className="navbar_container">
      {/* <img className="nav_logo" alt="Logo" /> */}

      <div className="navbar_sections">
        <section>
          <NavigationLink icon={<FiPlay />} routePath={"/"} />
          <hr className="nav_devider" />
          <NavigationLink icon={<MdExitToApp />} routePath={"/home"} />
          <NavigationLink
            icon={<MdOutlineWindow />}
            routePath={"/registration"}
          />
          <NavigationLink icon={<AiOutlineLogout />} routePath={"/importers"} />
          <hr className="nav_devider" />
          <NavigationLink icon={<GoCalendar />} routePath={"/calendar"} />
          <NavigationLink
            icon={<IoSettingsOutline />}
            routePath={"/settings"}
          />
        </section>

        <section>
          <NavigationLink
            icon={<AiOutlineQuestionCircle />}
            routePath={"/question"}
          />
          <NavigationLink icon={<BiLogOut />} routePath={"/login"} />
        </section>
      </div>
    </div>
  );
};
