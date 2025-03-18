import React from 'react';

const ProjectCard = ({ image, title, description, link, number }) => {
  return (
    <div className="project-card">
        <a href={link} className="project-link">
            <div className="card-content">
                <div className="number-card">
                    <h2 className="project-number">{number}</h2>
                </div>
                <div className="project-info">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-description">{description}</p>
                    
                </div>
                <div className="img-card">
                    <img src={image} alt={title} className="project-image" />
                </div>
            </div>
        </a>
    </div>
  );
};

export default ProjectCard;
