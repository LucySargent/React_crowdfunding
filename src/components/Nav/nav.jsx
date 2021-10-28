import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
const token = window.localStorage.getItem("token")

const [userToken, setUserToken] = useState(token)

const handleLogOut = () => {
  window.localStorage.removeItem("token")
  setUserToken(null)
  }

  return (
    <nav className="nav-container">
      <div className="nav-login">
      {userToken ? <button onClick={handleLogOut}>logout</button> : <Link to="/login"><p>Login</p></Link>}
      </div>
      <div>
        <Link to="/">Beebay</Link>
      </div>
      <div>
        <p>navicon</p>
      </div>
    </nav>
  );
}

export default Nav;


//ternary if/else
// {token
// ? <button onClick={() => window.localStorage.clear() && history.push('/login')}>
// logout
// </button>
// {
// <div>


//}

//need to pass down props to nav - why? we need to manage log in state from app.js