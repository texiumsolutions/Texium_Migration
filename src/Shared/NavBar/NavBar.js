import React from "react";
import { AiOutlineLogout, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FiPlay } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdExitToApp, MdOutlineWindow } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import auth from "../../firebase.init";
import "./NavBar.css";
import { NavigationLink } from "./NavigationLink";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";

export const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout =()=>{
    signOut(auth);
  }
  return (
    <div className="navbar_container">
      <Link to="/">
        <img src={logo} className="nav_logo" alt="Logo" />
      </Link>

      <div className="navbar_sections">
        <section>
          <NavigationLink icon={<FiPlay />} routePath={"/jobs"} />

          <hr className="nav_devider" />

          <NavigationLink icon={<MdExitToApp />} routePath={"/scanner"} />

          <NavigationLink
            icon={<MdOutlineWindow />}
            routePath={"/importers"}
          />

          <NavigationLink icon={<AiOutlineLogout />} routePath={"/migsets"} />

          <hr className="nav_devider" />

          <NavigationLink icon={<GoCalendar />} routePath={"/dashboard"} />

          <NavigationLink
            icon={<IoSettingsOutline />}
            routePath={"/configuration"}
          />
        </section>

        <section>
          <NavigationLink
            icon={<AiOutlineQuestionCircle />}
            routePath={"/"}
          />
          {user? <NavigationLink icon={<BiLogOut />} routePath={"/login"} onClick={logout}/> : <NavigationLink icon={<BiLogOut />} routePath={"/login"} />}
        </section>
      </div>
    </div>
  );
};
