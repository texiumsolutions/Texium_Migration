import React from "react";
import { useForm } from "react-hook-form";
import { BiLockAlt, BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from "../Registration/Loading";
import auth from "../../firebase.init";

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate= useNavigate(); 
  let signInError;
  if( loading){
    return <Loading></Loading>
  }
  if(error){
   signInError= <p style={{
    fontSize:"11px",
    color:"red"
    
    
  }}>{error?.message}</p>
  }
if(user){
console.log(user);
}
  const onSubmit = (data) =>{ 
  
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    navigate('/home');
  };
  
  return (
    <div style={{
      justifyContent:"center",
      alignItems:"center",
      // display:"flex",
      width:"100%",
      height:"100%",
      marginLeft:"500px",
      padding:"100px"
    }}>
    <div className="login_section">
      <h3>Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="username_section ">
          <BiUser className="login_input_icon" />
          <input
            type="email"
            name="email"
            
            placeholder="User Email"
            {...register("email", {
              required:{
                value:true,
                message:"Email is required!"
              },
              pattern: { value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            message:'Provide a valid Email' },
            })}
    />
        
        </div>
        {errors.email?.type === 'required' &&  <span style={{
          fontSize:"11px",
          color:"red",
          padding:"10px"
          
        }}>{errors.email.message}</span>}
        {errors.email?.type === 'pattern' &&  <span style={{
          fontSize:"11px",
          color:"red",
          padding:"10px"
          
        }}>{errors.email.message}</span>}
       
        <br />

        <div className="email_section">
          <BiLockAlt className="login_input_icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              required:{
                value:true,
                message:"Password is required!"
              },
              minLength: { value:6 ,
              message:'Must be 6 character or longer' },
              maxLength: { value:25 ,
                message:'Password will not be more then 25 charecter' },
              
              
            })}
          />
        </div>
        {errors.password?.type === 'required' &&  <span style={{
          fontSize:"11px",
          color:"red",
          padding:"10px"
          
        }}>{errors.password.message}</span>}
        {errors.password?.type === 'minLength' &&  <span style={{
          fontSize:"11px",
          color:"red",
          padding:"10px"
          
        }}>{errors.password.message}</span>}
        {errors.password?.type === 'maxLength' &&  <span style={{
          fontSize:"11px",
          color:"red",
          padding:"10px"
          
        }}>{errors.password.message}</span>}
        
        <br />
          {signInError}
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
    </div>
  );
};
