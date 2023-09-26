import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signin() {
  const [email,setemail]=useState("")
  const [password,setPassword]=useState("")

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(password)
    console.log(email)
    if(password || email){
      navigate("/homepage")
    }else{
      toast.error("Please fill all the fields")

    }
   
  };
  return (
    <form
    onSubmit={handleSignIn}
    className="signIn container d-flex flex-column gap-3 p-2"
  >
    <ToastContainer/>
    <h2 className="display-6 text-light text-center ">Sign In</h2>
    <div className="form-group d-flex flex-column gap-1">
      <label htmlFor="userName">Email</label>
      <input
        type="email"
        className="form-control"
        id="userName"
        placeholder="User Name"
        // required
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <small className="form-text text-muted"></small>
    </div>
    <div className="form-group d-flex flex-column gap-1">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Password"
        // required
        value={password}
        onChange={(e) => setPassword(e.target.value)}

      />
      <small className="form-text text-muted"></small>
    </div>
    <div className="form-group d-flex justify-content-between gap-1 px-1">
      <Link
        className="link-light btn btn-danger"
        to="forgotpassword"
      >
        Forgot Password
      </Link>
      <Link
        className="link-light btn btn-primary "
        to="signup"
      >
        Sign Up
      </Link>
    </div>
    <button type="submit" className="btn btn-primary">
      Login
    </button>
  </form>
  )
}

export default Signin