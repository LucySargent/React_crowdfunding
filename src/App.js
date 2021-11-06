import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import AddProjectPage from "./pages/AddProjectPage";
import ForbiddenPage from "./pages/Forbidden";
import SignUpPage from "./pages/SignUpPage";
import HeaderFooter from "./layouts/HeaderFooter";

function App() {

  return (
    <Router>
      <div>
        <Nav />
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
            <HeaderFooter >
            <HomePage />
            </HeaderFooter>
          </Route>
          <Route path="/forbidden">
            <ForbiddenPage />
          </Route>
          <Route path="/users/">
            <SignUpPage />
          </Route>
          {/* <Route path="/projects/:id">
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
