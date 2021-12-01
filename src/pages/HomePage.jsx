import React, { useState, useEffect } from "react";
// import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "./HomePage.css"

function HomePage() {
  //when we want to update projectList we use setProjectList
  const [projectList, setProjectList] = useState([]);

  //useEffect with function inside - running when page first loads (we know this by the empty array at end)
  //when the page loads put all the projects into the empty array - setProjectList
  //fetch gets stuff!
  useEffect(() => {
    //fetch...this is how we access our env variable (the api)
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      //chaining - then means what do I do next? Can have multiple 'thens'
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        // adding the data to project list
        setProjectList(data);
      });
  }, []);

  return (
    <div>
      <div className="banner">
        <div className="message">
          <h3 className="message-head">Beebay is...</h3>
          <p className="message-text">
          Beebay connects people who have space for beehives with local bee-keepers and people wanting to support the cost of setting up new hives. Site owners get a share of the honey, bee-keepers get to do what they love and our planet has more bees! Win, win, win...!
          </p>
        </div>
        <div className="stats">
          <p>STATS HERE</p>
          
          <p>STATS HERE</p>
          <p>STATS HERE</p>
        </div>
      </div>
      <div id="project-list">
        {projectList.map((projectData, key) => {
          return <ProjectCard key={key} projectData={projectData} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
