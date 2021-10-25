import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css"

function ProjectCard(props) {
  const { projectData } = props;

  return (
    <div className="project-card">
      {/* direct project cards to specific project pages */}
      <Link to={`/project/${projectData.id}`}>
        <img src={projectData.image} />
        <h3 className="project-card-text">{projectData.title}</h3>
      </Link>
        <h4 className="project-card-text">{projectData.description}</h4>
      <Link to={`/project/${projectData.id}`}>
        <h4 className="read-more-link">Read more...</h4>
      </Link>
    </div>
  );
}

export default ProjectCard;
