import React from "react";
import {Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import AddProjectPage from "./pages/AddProjectPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="message">
          {/* {userToken ? <p>hello user!</p> : <p>no logged in user</p>} */}
          <h2>About Beebay...</h2>
        </div>
        <div>
          <Link to="/projects/" className="btn">Add a project</Link>
        </div>

        <Switch>
          {/* url param "id" */}
          <Route path="/projects/">
            <AddProjectPage />
          </Route>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
      <div>
      <button className="btn">See more projects</button>
      </div>
    </Router>
  );
}

export default App;
