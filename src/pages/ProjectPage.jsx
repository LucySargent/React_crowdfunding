import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectPage() {
  //starting state is object with empty arry
  const [projectData, setProjectData] = useState({ pledges: [] });
  //this gets the thing we have called id from url(individual project)
  const { id } = useParams();
  
  useEffect(() => {
    //get project data - but this time its from the id we set up
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        console.log("results", results)
        return results.json();
      })
      .then((data) => {
        console.log("data", data)
        setProjectData(data);
      });
  }, []);

  return (
    <div>
      <h2>{projectData.title}</h2>
      <h3>Created at: {projectData.date_created}</h3>
      <h3>{`Status: ${projectData.is_open}`}</h3>
      <h2>{`Description: ${projectData.description}`}</h2>
      
      <h3>Pledges:</h3>
      <ul>
        {projectData.pledges.map((pledgeData, key) => {
          return (
            <li>
              {pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectPage;
