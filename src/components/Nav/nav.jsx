import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import beebay_logo from "../../beebay_logo.png"



function Nav() {
const token = window.localStorage.getItem("token")
const [userToken, setUserToken] = useState(token)

const handleLogOut = () => {
  console.log("we are handling the logout")
  window.localStorage.removeItem("token")
  setUserToken(null)
  console.log("token is: ", window.localStorage.getItem("token"))
  }


  return (
    <div>
    <nav className="nav-bar">
      <div className="nav-links">
      {userToken ? <button className="logoutbtn" onClick={handleLogOut}>Logout</button> : <Link to="/login"><p>login</p></Link>}
      </div>
      <div className="nav-links">
      <Link to="/login"><p>Start a Beebay Project</p></Link>
      </div>
      <div className="nav-links">
      <Link to="/login"><p>Home</p></Link>
      </div>
    </nav>
      <div className="logo-div">
        <Link to="/"><img className="mainlogo" src={ beebay_logo } alt="test"/></Link>
      </div>
</div>
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