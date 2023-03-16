import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Card } from "../../../components/Card/Card";
import { Modal } from "../../../components/Modal/Modal";
import { NavBar } from "../../../Shared/NavBar/NavBar";
import "./ImportsTab.css";

export const ImportsTab = ({data}) => {
  const location = useLocation();
  const [showDetails, setShowDetails] = useState(false);
  const [showRun, setShowRun] = useState(false);
  const [showObjects, setShowObjects] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const profileName = location.state?.name;

  return (
    <div className="container">
      <div className="nav_container">
        <NavBar />
      </div>


      <div className="content_container">
        <Card height="calc(100%)" width="calc(100%)">
          <div>
            <div className="opentab_header">
              <Link className="opentab_back_btn" to={"/imports"}>
                Back
              </Link>
              <p>{profileName}</p>
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
                  Selection
                </NavLink>

                <NavLink
                  to={"importRuns"}
                  onClick={() => setShowObjects(!showObjects)}
                  className={({ isActive }) =>
                    isActive
                      ? "opentab_navlink opentab_active"
                      : "opentab_navlink"
                  }
                >
                  Import Runs
                </NavLink>
              </div>

              <div className="opentab_buttons">
                <button className="opentab_btn" type="button">
                  Close
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="opentab_btn"
                  type="button"
                >
                  Save & Run
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="opentab_btn opentab_save_btn"
                  type="button"
                >
                  Save
                </button>
              </div>
            </div>

            <Outlet />
          </div>
        </Card>
      </div>
      {showModal ? (
        <Modal
          worning
          text="Are you sure to save?"
          btnText="Yes"
          path="/imports/importsTab/selection"
          setShowModal={setShowModal}
        />
      ) : null}
    </div>
  );
};
