
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ViewProjectPage({ projects }) {
  const { projectId } = useParams();

  // Encuentra el proyecto correspondiente al ID en la URL
  const project = projects.find(project => project.id === parseInt(projectId));

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <img src={project.thumbnail} alt={`Thumbnail for ${project.title}`} />
      <p>{project.description}</p>
      <button> View Proyect</button>
      <p>{project.members}</p>
      <div>
        <strong>Tags:</strong> {project.tags.map((tag, index) => (
          <button key={index}>{tag}</button>
        ))}
      </div>
    </div>
  );
}
