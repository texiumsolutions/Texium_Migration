import React from "react";
import { Link, useNavigate } from "react-router-dom";
import notfound from "../../assets/404NotFound.gif";
import { Card } from "../../components/Card/Card";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <div className="notfound_container">
      <Card width={"calc(100vw - 6em)"} height={"calc(100vh - 6em)"}>
        <div className="notfound_contents">
          <img className="notfound_image" src={notfound} alt="Not Found" />

          <Link className="notfound_back_btn" onClick={handleGoBack}>
            Go Back
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
