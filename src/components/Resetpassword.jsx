import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigation } from 'react-router-dom';


function Resetpassword() {
  const navigate = useNavigation("")
  const [confirmpassword, setconfirmpassword] = useState("")



  const token = window.location.pathname.split("/").pop();
  const handlesumbitpassword = async (e) => {
    e.preventDefault();

    // Basic validation: Check if the password is not empty.
    // if (!password) {
    //   console.log("Password is required");
    //   return; // Exit the function to prevent the API request when the password is empty.
    // }

    try {
      const response = await axios.post(
        `https://password-reset-gd3w.onrender.com/user/reset-password/${token}`,
        {
          newPassword: confirmpassword,
        }
      );

      if (response.status === 200) {
        toast.success("Password reset successful");
        setconfirmpassword("")

        // You can redirect the user to a success page or perform other actions.
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle the error, display an error message, or redirect the user to an error page.
    }

  }
  return (
    <form onSubmit={handlesumbitpassword}


      className="signIn container d-flex flex-column gap-3 p-2"
    >
      <ToastContainer />
      <h2 className="display-6 text-light text-center ">New Password</h2>
      <div className="form-group d-flex flex-column gap-1">

        <label htmlFor="newpassword">Enter New Password</label>
        <input
          type="password"
          className="form-control"
          id="newpassword"
          placeholder="Please Enter Your New Password"
          value={confirmpassword}
          onChange={(e) => setconfirmpassword(e.target.value)}

        />
      </div>


      <button type="submit" className="btn btn-primary">
        Sumbit
      </button>

    </form>
  )
}

export default Resetpassword