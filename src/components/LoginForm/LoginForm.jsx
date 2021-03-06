import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  //e is an event - it is how we reference the argument we provide to the function
  const handleChange = (e) => {
    const { id, value } = e.target;
    //referencing what's in the state with prevcredentials (it's inbuilt to useState - we are just accessing it)
    setCredentials((prevCredentials) => ({ ...prevCredentials, [id]: value }));
  };

  const postData = async () => {
    //fetch - get data from server. Fetch is a promise.
    //async-await blocks execution of all the code that follows it until the promise fulfills
    //It does allow other tasks to continue to run in the meantime, but the awaited code is blocked.
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }
    );
    console.log("login form POST response object: ", response);
    return response.json();
  };

  const handleSubmit = (e) => {
    console.log("we're logging in");
    e.preventDefault();
    /* && check - both conditions must be true (the other one is || for 'or', this or that)
    reads left to right*/
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        //storing in browser memory
        window.localStorage.setItem("token", response.token);
        console.log("token:", response.token);
        history.push("/");
        console.log(response);
        console.log(window.location);
        window.location = `${window.location.origin}/`;
      });
    }
  };

  return (
    <div className="main-container">
      <div>
        <h3>
          Login to Beebay
        </h3>
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
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <div>
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </form>
      <div className="sign-up-message">
        <h3>
          Don't have a Beebay account?{" "}
          <Link className="signup-link" to="/users/">
            Sign Up
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default LoginForm;
