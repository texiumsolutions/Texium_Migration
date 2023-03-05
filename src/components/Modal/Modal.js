import { signOut } from "firebase/auth";
import React from "react";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Modal.css";

export const Modal = ({ text, btnText, setShowModal, worning }) => {
  const handleModalClose = () => {
    setShowModal(false);
    signOut(auth);
  };

  return (
    <div className="modal_wrapper">
      <div className="modal_content">
        <small>
          <BiError className="modal_icon" />
          {worning ? "Worning" : null}
        </small>
        <p>{text}</p>
        <Link
          className="modal_btn"
          to="/"
          onClick={handleModalClose}
          type="button"
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
};
