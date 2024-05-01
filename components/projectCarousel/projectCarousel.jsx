import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCarousel({ projects }) {
  return (
    <div className="carousel">
      {projects.slice(0, 4).map(project => (
        <Link key={project.id} to={`/project/${project.id}`}>
          <img src={project.thumbnail} alt={`Thumbnail for ${project.title}`} />
        </Link>
      ))}
    </div>
  );
}
