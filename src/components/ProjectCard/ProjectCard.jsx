import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css"


function ProjectCard(props) {
  const { projectData } = props;

  return (
    <div className="project-card">
     
      {/* direct project cards to specific project pages */}
      <Link to={`/project/${projectData.id}`}>
        <img className="small-project-card-image" src={projectData.image} alt="bee"/>
        <div className="project-title-text">
        <p>{projectData.title}</p>
      </div>
      </Link>
        {/* <p>{projectData.description}</p> */}
      <Link to={`/project/${projectData.id}`}>
        {/* <p className="read-more-link">Read more...</p> */}
      </Link>
      
    </div>
  );
}

export default ProjectCard;

