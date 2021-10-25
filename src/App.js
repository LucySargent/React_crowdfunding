import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="message">
          <h2>About Beebay...</h2>
        </div>
        <div>
          <button className="btn">Start a Beebay Project</button>
        </div>

        <Switch>
          {/* url param "id" */}
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
