import React from "react";
import "./ProjectLink.css";

function ProjectLink({ title, description, image, url, github }) {
  return (
    <a className="project-link" href={url} target="_blank" rel="noreferrer">
      <div className="project-image-container" style={{backgroundImage: `url(${image})`}}></div>
      <h3 className="project-title">{title}</h3>
    </a>
  );
}

export default ProjectLink;