import React from "react";
import { BiLockAlt, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login_section">
      <h3>Login</h3>

      <div className="username_section ">
        <BiUser className="login_input_icon" />
        <input type="email" name="email" placeholder="User Email" required />
      </div>

      <br />

      <div className="email_section">
        <BiLockAlt className="login_input_icon" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>

      <br />

      <input className="login_btn" type="submit" name="submit" value="Login" />

      <br />

      <p className="registration_link">
        Not Registered?{" "}
        <Link to="/registration" className="registration_page_link">
          Register Here
        </Link>
      </p>
    </div>
  );
};
