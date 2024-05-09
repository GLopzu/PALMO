
import React from 'react';
import { useParams } from 'react-router-dom';
import './Viewprojectpage.css'


export default function ViewProjectPage({ projects }) {
  const { projectId } = useParams();

  // Encuentra el proyecto correspondiente al ID en la URL
  const project = projects.find(project => project.id === parseInt(projectId));

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className='projectFound'>
      <div className='projectInfo'>
        <div className='infoContainer'>
          <div className='tags'>
            <strong>Tags:</strong> {project.tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
          <div className="projectTitle">
            <h2>{project.title}</h2>
          </div>
          <div className="projectDescription">
            <p>{project.description}</p>
          </div>

          <div className='viewProjectBtn'>
            <button> View Proyect</button>
          </div>
          <div className='members'>
            <p>{project.members}</p>
          </div>
        </div>
      </div>

      <div className='projectImg'>
        <img src={project.thumbnail} alt={`Thumbnail for ${project.title}`} />
      </div>
    </div>
  );
}
