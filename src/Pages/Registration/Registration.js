import { async } from "@firebase/util";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BiLockAlt, BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

export const Registration = () => {
  // const [registeredData, setRegisteredData] = useState({});

  // const handleOnChange = (e) => {
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   const newRegisteredData = { ...registeredData };
  //   newRegisteredData[field] = value;
  //   console.log(newRegisteredData);
  //   setRegisteredData(newRegisteredData);
  // };
  // const handleOnSubmit = (e) => {
  //   console.log(registeredData.email);
  //   console.log(registeredData.password);

  //   if (registeredData.password !== registeredData.confirmPassword) {
  //     alert("hoy nai");
  //     return
  //   }
  //   e.preventDefault();
  // };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
  const navigate= useNavigate(); 
  let signInError;
  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (error || Uerror) {
    signInError = (
      <p
        style={{
          fontSize: "11px",
          color: "red",
        }}
      >
        {error?.message || Uerror?.message}
      </p>
    );
  }
  if (user) {
    console.log(user);
  }
  const onSubmit = async (data) => {
    
    createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({displayName:data.name, photoURL:data.url});

    navigate('/');
  };

  return (
    <div>
      {/* <div className="login_section">
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
    </div> */}

      <div className="login_section">
        <h3>Registration</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="username_section ">
            <BiUser className="login_input_icon" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              
              {...register("userName", {
                required:{
                  value:true,
                  message:'Name is Required'
                }
              })}
            />
         
          </div>
          {errors.userName?.type === "required" && (
            <span
              style={{
                fontSize: "11px",
                color: "red",
                padding: "10px",
              }}
            >
              {errors.userName.message}
            </span>
          )}
          <br />
          <div className="username_section ">
            <BiUser className="login_input_icon" />
            <input
              type="email"
              name="email"
              placeholder="User Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required!",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
            />
          </div>
          {errors.email?.type === "required" && (
            <span
              style={{
                fontSize: "11px",
                color: "red",
                padding: "10px",
              }}
            >
              {errors.email.message}
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span
              style={{
                fontSize: "11px",
                color: "red",
                padding: "10px",
              }}
            >
              {errors.email.message}
            </span>
          )}

          <br />

          <div className="email_section">
            <BiLockAlt className="login_input_icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required!",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 character or longer",
                },
                maxLength: {
                  value: 25,
                  message: "Password will not be more then 25 charecter",
                },
              })}
            />
          </div>
          {errors.password?.type === "required" && (
            <span
              style={{
                fontSize: "11px",
                color: "red",
                padding: "10px",
              }}
            >
              {errors.password.message}
            </span>
          )}
          {errors.password?.type === "minLength" && (
            <span
              style={{
                fontSize: "11px",
                color: "red",
                padding: "10px",
              }}
            >
              {errors.password.message}
            </span>
          )}
          {errors.password?.type === "maxLength" && (
            <span
              style={{
                fontSize: "11px",
                color: "red",
                padding: "10px",
              }}
            >
              {errors.password.message}
            </span>
          )}

          <br />
          {signInError}
          <input
            className="login_btn"
            type="submit"
            name="submit"
            value="Sign Up"
          />

          <br />

          <p className="registration_link">
            Already have an account?{" "}
            <Link to="/login" className="registration_page_link">
              login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
