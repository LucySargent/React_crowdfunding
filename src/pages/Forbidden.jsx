import React from "react";
import { Link } from "react-router-dom"


const Forbidden = () => {
    return (
        <div>
            <h2>Sorry</h2>
            <p>You don't have permission to edit this project.</p>
            <Link to="/">Buzz off back to the home page! </Link>
        </div>
    )
}

export default Forbidden;