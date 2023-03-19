import { sendEmailVerification } from "firebase/auth";
import React from "react";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BiLockAlt, BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.init";

export const Registration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
  const navigate = useNavigate();
  let signInError;
  if (loading || updating) {
    return <Loading></Loading>;
  }

  const verifyEmail = () =>{
    sendEmailVerification(auth.currentUser)
    .then(() =>{
      console.log("Email verification send!")
    })
  }
  if (error || Uerror) {
    signInError = (
      <p className="error_message">{error?.message || Uerror?.message}</p>
    );
  }
  // if (user) {
  //   console.log(user);
  // }
  const onSubmit = async (data) => {
    verifyEmail();
    createUserWithEmailAndPassword(data.email, data.password);
    
    await updateProfile({ displayName: data.name, photoURL: data.url });
    navigate("/home");
  };

  // const handlePasswordReset = () =>{
  //   sendPasswordResetEmail(auth, data.email)
  //   .then(() =>{
  //     console.log("Email sent!")
  //   })
  // }

  return (
    <div className="login_container">
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
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
          </div>
          {errors.userName?.type === "required" && (
            <span className="error_message">{errors.userName.message}</span>
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
            <span className="error_message">{errors.email.message}</span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="error_message">{errors.email.message}</span>
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
            <span className="error_message">{errors.password.message}</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="error_message">{errors.password.message}</span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className="error_message">{errors.password.message}</span>
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
            <Link to="/" className="registration_page_link">
              login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
