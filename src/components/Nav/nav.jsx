import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav-container">
      <div className="nav-login">
      <Link to="/login"><p>Login</p></Link>
      </div>
      <div>
        <Link to="/">Beebay</Link>
      </div>
      <div>
        <p>navicon</p>
      </div>
      {/* <div className="navicon">icon</div> */}
    </nav>
  );
}

export default Nav;
