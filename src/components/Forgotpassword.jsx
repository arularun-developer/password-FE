import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link,} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';


function Forgotpassword() {
 
    const [email, setemail] = useState("")

 const handleForgot = async (e)=>{
        e.preventDefault();
        console.log(email)
        try {
          const response = await axios.post("https://password-reset-gd3w.onrender.com/user/forgot-password", {
            email,
          });
          if (response.status === 200) {
            toast.success("Your reset password URL has been successfully sent!");
            setemail(""); // Clear the email input field
          } else {
            // Handle other response status codes if needed
            toast.error("Failed to send the reset password URL");
          }
        } catch (error) {
          console.error("Error:", error);
        }
        
 }
  return (
    <form
     onSubmit={handleForgot}
    className="signIn container d-flex flex-column gap-3 p-2"
  >
      <ToastContainer />
    <h2 className="display-6 text-center">Forgot Password</h2>
    <div className="form-group d-flex flex-column gap-1">
      <label htmlFor="useremail">Email</label>
      <input
        type="email"
        className="form-control"
        id="useremail"
        name="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder="Enter Your Email"
        required
      />
      <small className="form-text text-muted"></small>
    </div>
    <button type="submit" className="btn btn-primary">
       Send Email
    </button>
    <Link className="text-light text-decoration-none text-center" to={"/"}>
      <button type="button" className="btn btn-primary">
        Go to Login
      </button>
    </Link>
  </form>
  )
}

export default Forgotpassword