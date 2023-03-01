import React from "react";
import { BiLockAlt, BiUser } from "react-icons/bi";
import "./Login.css";

export const Login = () => {
  return (
    <div>
      <div className="login_section">
        <h3>Login</h3>

        <div className="username_section ">
          <BiUser className="login_input_icon"/>
          <input type="text" name="name" placeholder="User Name" required />
        </div>

        <br />

        <div className="email_section">
          <BiLockAlt className="login_input_icon"/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <br />

        <input className="submit_btn" type="submit" name="submit" value="Submit" />
      </div>
    </div>
  );
};
