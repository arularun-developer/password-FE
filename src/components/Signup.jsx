import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
// import { useNavigation } from 'react-router-dom';



function Signup() {
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handleSuumbit = async (e) => {
    e.preventDefault();
    console.log(firstname)
    console.log(lastname);
    console.log(password)
    console.log(email);
    try {
      const response = await axios.post("https://password-reset-gd3w.onrender.com/user/register", {
        firstname,
        lastname,
        email,
        password,
      });
      if (response.status === 201) {
        toast.success("Successfully registered your details");
        setfirstname("");
        setemail("");
        setlastname("");
        setpassword("");
      } else {
        toast.error("An error occurred during registration");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.warning("Email Already registered");
      } else {
        console.log("Error:", error);
        toast.error("An error occurred during registration");
      }
    }

  }

  return (
    <form
      onSubmit={handleSuumbit}

      className="signIn container d-flex flex-column gap-1 p-3"
    >
      <ToastContainer />

      <h2 className="display-6 text-center text-light">Sign Up</h2>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          className="form-control"
          id="firstname"
          placeholder="Enter your firstname"
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
          required
        />
        <small className="form-text text-muted"></small>
      </div>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="username">Lastname</label>
        <input

          type="text"
          className="form-control"
          id="username"
          placeholder="Enter your lastname"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}

          required
        />

      </div>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setemail(e.target.value)}


        />
      </div>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="Password"> Password</label>
        <input
          autoComplete="new-password"
          type="password"
          className="form-control"
          id="Password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required

        />
        <small className="form-text text-muted"></small>
      </div>
      <div className=' d-flex justify-content-between '>
        <button type="submit" className="btn btn-primary"

        >
          Register
        </button>
        <Link className="text-light text-decoration-none text-center" to={"/"}>
          <button type="button" className="btn btn-primary">
            Go to Login
          </button>
        </Link>
      </div>



    </form>
  )
}

export default Signup

