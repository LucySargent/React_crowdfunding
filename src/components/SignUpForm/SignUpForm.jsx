import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignUpForm.css"

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const credentials = {"username": userData.username, "password": userData.password}

  const history = useHistory()
  
  
  const login= async () => {
    console.log("running login")
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }
    );
    console.log("testfunction ", response);
    return response.json();
  };



  const handleChange = (e) => {
    console.log("handle change event:", e)
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("Form submitted", userData);
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
      console.log("sign up response:", response);
      return response.json();
    })
    history.push("/")
    alert("Congratulations! Your Beebay account has been created. Please login.")
  };
    
  return (
    <div className="main-container">
    <div>
      <h3>Create your Beebay account</h3>
     </div>
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
          type="password" 
          id="password" 
          placeholder="Password" 
          onChange={handleChange}
          />
        </div>
          <button className="sign-up" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        <div>
        </div>
      </form>
    </div>
    
  );
};

export default SignUpForm;
