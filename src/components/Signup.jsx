import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function Signup() {
  let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [cPassword, setcPassword] = useState("");
  const handleSignUp = (e) =>{
    e.preventDefault();
    console.log(email)
    console.log(username)
    console.log(password)
    console.log(cPassword)
    if(email || username||password ||cPassword){
        console.log("thanks for filling the form")
        navigate("/homepage")
    }else{
      toast.error("Please fill all the fields")

    }

  
  }
  return (
    <form
    onSubmit={handleSignUp}
    className="signIn container d-flex flex-column gap-1 p-3"
  >
        <ToastContainer/>

    <h2 className="display-6 text-center text-light">Sign Up</h2>
    <div className="form-group d-flex flex-column gap-1">
      <label htmlFor="email">Email</label>
      <input
            autoComplete="new-password"
        type="email"
        className="form-control"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        // required
      />
      <small className="form-text text-muted"></small>
    </div>
    <div className="form-group d-flex flex-column gap-1">
      <label htmlFor="username">Username</label>
      <input
              autoComplete="new-password"
        type="text"
        className="form-control"
        id="username"
        placeholder="Username"
        // required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <small className="form-text text-muted"></small>
    </div>
    <div className="form-group d-flex flex-column gap-1">
      <label htmlFor="password">Password</label>
      <input
            autoComplete="new-password"
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
    <div className="form-group d-flex flex-column gap-1">
      <label htmlFor="cPassword">Confirm Password</label>
      <input
      autoComplete="new-password"
        type="password"
        className="form-control"
        id="cPassword"
        placeholder="Confirm Password"
        // required
        value={cPassword}
        onChange={(e) => setcPassword(e.target.value)}
      />
      <small className="form-text text-muted"></small>
    </div>

    <button type="submit" className="btn btn-primary">
      Sign Up
    </button>
   
  </form>
  )
}

export default Signup

