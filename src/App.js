import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import AddProjectPage from "./pages/AddProjectPage";
import otherlogo from "./otherlogo.jpg"
import ForbiddenPage from "./pages/Forbidden";

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <div className="addProject">
          <Link to="/login" className="addProjectBtn">
            Start a Beebay Project
          </Link>
        </div>
        <Switch>
          <Route path="/projects/">
            <AddProjectPage />
          </Route>
          {/* url param "id" */}
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/forbidden">
            <ForbiddenPage />
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
