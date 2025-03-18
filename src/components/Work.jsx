import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    image: 'https://placehold.co/600x400',
    title: 'Project 1',
    description: 'Description du projet 1',
    link: '#',
    number: "01",
  },
  {
    image: 'https://placehold.co/600x400',
    title: 'Project 2',
    description: 'Description du projet 2',
    link: '#',
    number: "02",
  },
  {
    image: 'https://placehold.co/600x400',
    title: 'Project 2',
    description: 'Description du projet 2',
    link: '#',
    number: "03",
  },
  {
    image: 'https://placehold.co/600x400',
    title: 'Project 2',
    description: 'Description du projet 2',
    link: '#',
    number: "04",
  },
  {
    image: 'https://placehold.co/600x400',
    title: 'Project 2',
    description: 'Description du projet 2',
    link: '#',
    number: "05",
  },
  {
    image: 'https://placehold.co/600x400',
    title: 'Project 2',
    description: 'Description du projet 2',
    link: '#',
    number: "06",
  },
  {
    image: 'https://placehold.co/600x400',
    title: 'Project 2',
    description: 'Description du projet 2',
    link: '#',
    number: "07",
  },
  // Ajoutez d'autres projets ici
];

const ProjectSection = () => {
  return (
    <section className="project-section">
        <div className="container">
            <h2 className="section-title">Works</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    number={project.number}
                />
                ))}
            </div>
        </div>
    </section>
  );
};

export default ProjectSection;