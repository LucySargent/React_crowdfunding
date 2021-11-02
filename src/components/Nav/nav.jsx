import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import otherlogo from "../../otherlogo.jpg"
import navicon from "../../navicon.png"


function Nav() {
const token = window.localStorage.getItem("token")
const [userToken, setUserToken] = useState(token)

const handleLogOut = () => {
  console.log("we are handling the logout")
  window.localStorage.removeItem("token")
  setUserToken(null)
  }


  return (
    <nav className="nav-container">
      <div className="nav-login">
      {userToken ? <button className="" onClick={handleLogOut}>logout</button> : <Link to="/login"><p>Login</p></Link>}
      </div>
      <div>
        <Link to="/"><img className="mainlogo" src={ otherlogo } alt="test"/></Link>
      </div>
      <div>
        <img className="navicon" src={ navicon } alt="test"/>
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