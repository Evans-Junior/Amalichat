import React, { useState } from "react";
import "./login.css";
import { FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login({control}) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =(username) => {
    if(control){
      console.log(username);
      control(username)
    //   socket.auth = { username };
    // socket.connect();
      const name =JSON.stringify(username)
      localStorage.setItem('username',name)
      navigate("/chat");
    }
    else{
      console.log('there is no problem')
    }

 
  };

  return (
    <div className="login_page">
      <h1 className="title">AmaliChat</h1>
      <div className="container">
        <form  onSubmit={handleSubmit(onSubmit)}>
          {/* <p>{data}</p> */}
          <input
            className="type_email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            required
          />
          {/* <input type="submit" /> */}
          <input className="arrow" type='submit' />
        </form>
        <p className="emailerror">{error}</p>
        <div className="single-option">
          <img className="googleicon" alt="google" src="/images/gg.jpg" />
          <span className="googlesign">Sign-in with Google</span>
          {/* <p>{loading ? "Signing in..." : "Login with Google"}</p> */}
        </div>
      </div>
    </div>
  );
}
