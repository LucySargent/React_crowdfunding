import React from "react";
import { Link } from "react-router-dom"
import "../components/Forbidden/Forbidden.css"


const Forbidden = () => {
    return (
        <div className="forbidden-container">
            <h2>Sorry!</h2>
            <p>You don't have permission to edit this project.</p>
           <p>Buzz off back to the  <Link className="homelink" to="/">Home Page!</Link></p>
        </div>
    )
}

export default Forbidden;