import React, { useState } from "react";
import "./SignUpForm.css"

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    fetch(`${process.env.REACT_APP_API_URL}users/`, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(userData),
    }).then((response) => {
      console.log("we're creating a user");
      return response.json();
    });
  };

  return (
    <div className="signup-container">
      <h3>Sign up to Beebay</h3>
      <form>
        <div>
          <input 
          type="text" 
          id="username" 
          placeholder="Username" 
          onChange={handleChange}
          />          
        </div>
        <div>
          <input 
          type="text" 
          id="email" 
          placeholder="Email"
          onChange={handleChange}
          />
        </div>
        <div>
          <input 
          type="text" 
          id="password" 
          placeholder="Password" 
          onChange={handleChange}
          />
        </div>
          <button className="signup-btn" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        <div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
