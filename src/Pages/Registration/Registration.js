import React, { useState } from "react";
import { BiLockAlt, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Registration = () => {
  const [registeredData, setRegisteredData] = useState({});

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisteredData = { ...registeredData };
    newRegisteredData[field] = value;
    console.log(newRegisteredData);
    setRegisteredData(newRegisteredData);
  };
  const handleOnSubmit = (e) => {
    if (registeredData.password !== registeredData.confirmPassword) {
      alert("hoy nai");
      return
    }
    e.preventDefault();
  };
  return (
    <div className="login_section">
      <h3>Registration</h3>

      <div className="username_section ">
        <BiUser className="login_input_icon" />
        <input
          onChange={handleOnChange}
          type="email"
          name="email"
          placeholder="User Email"
          required
        />
      </div>

      <br />

      <div className="email_section">
        <BiLockAlt className="login_input_icon" />
        <input
          onChange={handleOnChange}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>

      <br />

      <div className="email_section">
        <BiLockAlt className="login_input_icon" />
        <input
          onChange={handleOnChange}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />
      </div>

      <br />

      <input
        onClick={handleOnSubmit}
        className="login_btn"
        type="submit"
        name="submit"
        value="Register"
      />

      <br />

      <p className="registration_link">
        Have Account?{" "}
        <Link to="/" className="registration_page_link">
          Login Here
        </Link>
      </p>
    </div>
  );
};
