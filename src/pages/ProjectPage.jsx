import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function ProjectPage() {
  //starting state is object with empty arry
  const [projectData, setProjectData] = useState({ pledges: [] });
  //this gets the thing we have called id from url(individual project)
  const { id } = useParams();
  const formattedDate = new Date(projectData.date_created).toLocaleDateString()
 
  
  useEffect(() => {
    //get project data - but this time it's from the id we set up
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
      <div className="project">
        <h1>{projectData.title}</h1>
        <img src={projectData.image}/>
        <h3>{`Description: ${projectData.description}`}</h3>
        <div className ="project-details">
        <h4>{`Suburb: ${projectData.suburbs}`}</h4>
        <h4>Created: {formattedDate}</h4>
        <h4>{`Beehive goal: ${projectData.beehives}`}</h4>
        <h4>{`Minimum: $${projectData.min_required}`}</h4>
        <h4>{`Goal: $${projectData.goal}`}</h4>
        {/* <h3>Created at: {projectData.date_created}</h3> */}
        <h4>{`Status: ${projectData.status}`}</h4>
        </div>
          <progress value="30" max="100" />
        <h2>Pledges</h2>
        <div className="container-pledges">
          {projectData.pledges.map((pledgeData, key) => {
            return (
              <ul>
                ${pledgeData.amount} from Supporter {pledgeData.supporter} "{pledgeData.comment}"
                </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
