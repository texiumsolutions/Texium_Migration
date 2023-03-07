import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineLogout, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FiPlay } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdExitToApp, MdOutlineWindow } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Modal } from "../../components/Modal/Modal";
import auth from "../../firebase.init";
import "./NavBar.css";
import { NavigationLink } from "./NavigationLink";

export const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="navbar_container">
      <Link to="/home">
        <img src={logo} className="nav_logo" alt="Logo" />
      </Link>

      <div className="navbar_sections">
        <section>
          <NavigationLink icon={<FiPlay />} routePath={"/jobs"} />

          <hr className="nav_divider" />

          <NavigationLink icon={<MdExitToApp />} routePath={"/scanner"} />

          <NavigationLink icon={<MdOutlineWindow />} routePath={"/migsets"} />

          <NavigationLink icon={<AiOutlineLogout />} routePath={"/importers"} />

          <hr className="nav_divider" />

          <NavigationLink icon={<GoCalendar />} routePath={"/dashboard"} />

          <NavigationLink
            icon={<IoSettingsOutline />}
            routePath={"/configuration"}
          />
        </section>

        <section>
          <NavigationLink
            icon={<AiOutlineQuestionCircle />}
            routePath={"/help"}
          />
          {user && (
            <NavLink
              onClick={() => setShowModal(true)}
              className="route_btn logout_btn"
            >
              <button className="route_btn" type="button">
                <div className="navbar_icon">
                  <BiLogOut />
                </div>
              </button>
            </NavLink>
          )}
        </section>
      </div>
      {showModal ? (
        <Modal
          worning
          text="Am I Disturbing You?"
          btnText="Sign Out"
          path="/"
          logout={logout}
          setShowModal={setShowModal}
        />
      ) : null}
    </div>
  );
};
