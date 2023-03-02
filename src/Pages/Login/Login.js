import React from "react";
import { useForm } from "react-hook-form";
import { BiLockAlt, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  
  return (
    <div className="login_section">
      <h3>Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="username_section ">
          <BiUser className="login_input_icon" />
          <input
            type="email"
            name="email"
            required
            placeholder="User Email"
            {...register("mail", {
              pattern: { value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: "invalid email address" },
            })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
        
        </div>

        <br />

        <div className="email_section">
          <BiLockAlt className="login_input_icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              maxLength: 24,
              minLength: 6,
            })}
          />
        </div>

        <br />

        <input
          className="login_btn"
          type="submit"
          name="submit"
          value="Login"
        />

        <br />

        <p className="registration_link">
          Not Registered?{" "}
          <Link to="/registration" className="registration_page_link">
            Register Here
          </Link>
        </p>
      </form>
    </div>
  );
};
