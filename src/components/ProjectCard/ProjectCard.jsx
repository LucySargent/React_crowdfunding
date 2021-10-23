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
        <h3>{projectData.title}</h3>
        <h4>{projectData.description}</h4>
        <h4>status: {projectData.status}</h4>
      </Link>
    </div>
  );
}

export default ProjectCard;
