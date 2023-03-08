import { signOut } from "firebase/auth";
import React from "react";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Modal.css";

export const Modal = ({ text, btnText, path, setShowModal, worning }) => {
  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleModalSignOut = () => {
    signOut(auth);
    setShowModal(false);
  };

  return (
    <div className="modal_wrapper">
      <div className="modal_content">
        <small>
          <BiError className="modal_icon" />
          {worning ? "Worning" : null}
        </small>
        <p>{text}</p>

        <div className="modal-btns">
          <Link
            className="modal_btn"
            to="#"
            onClick={() => setShowModal(false)}
            type="button"
          >
            Cancel
          </Link>
          {!btnText === "Yes" ? (
            <Link
              className="modal_btn"
              to={path}
              onClick={handleModalSignOut}
              type="button"
            >
              {btnText}
            </Link>
          ) : (
            <Link
              className="modal_btn"
              to={path}
              onClick={handleModalClose}
              type="button"
            >
              {btnText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
