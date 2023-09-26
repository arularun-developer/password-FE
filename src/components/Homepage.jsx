import React from 'react'
import { Link } from 'react-router-dom'
function Homepage() {
  return (
    <div className="signIn container d-flex flex-column gap-3 p-2">
      <h2 className="display-6 text-center text-success"> Created Successfully</h2>
      <p className="text-center text-white fs-3">Kindly visit our login page</p>
      <Link className="text-center" to="/">
        <button type="submit" className="btn btn-primary">
          Goto Login
        </button>
      </Link>

    </div>
  )
}

export default Homepage