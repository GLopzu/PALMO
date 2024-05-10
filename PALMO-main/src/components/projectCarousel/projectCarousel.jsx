import React from 'react';
import { Link } from 'react-router-dom';
import './projectCarousel.css'

export default function ProjectCarousel({ projects }) {
  return (
    <div className="carousel">
      <div className='carouselContent'>
        <div className='carouselTitle'><h2>More projects</h2></div>
        <div className='carouselImages'>{projects.slice(0, 4).map(project => (
          <div className="carouselImg"><Link key={project.id} to={`/project/${project.id}`}>
            <img src={project.thumbnail} alt={`Thumbnail for ${project.title}`} />
          </Link></div>
        ))}</div>
      </div>
    </div>
  );
}
