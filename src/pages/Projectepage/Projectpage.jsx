import React, { useState, useEffect, useRef } from 'react';
import projects from '../../const/projectCard';

export function ProjectSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loadedProjectsCount, setLoadedProjectsCount] = useState(4); // Contador de proyectos cargados hasta ahora (si se cambia esto se cambia lastProyectRef)
  const [isLoading, setIsLoading] = useState(false); 
  const projectsPerPage = 4; // podemos cambiar las tarjetas iniciales
  const lastProjectRef = useRef(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // Filtrar proyectos según el término de búsqueda:
    const filtered = projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProjects(filtered);
  }, [searchTerm]);

  useEffect(() => {
    // Observador para detectar el final de la pgima:
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    if (lastProjectRef.current) {
      observer.observe(lastProjectRef.current);
    }
    return () => {
      if (lastProjectRef.current) {
        observer.unobserve(lastProjectRef.current);
      }
    };
  }, [filteredProjects]);

  const handleIntersection = (entries) => {
    const lastEntry = entries[0];
    if (lastEntry.isIntersecting && !isLoading) {
      setIsLoading(true);
      // Simulación de carga de proyectos:
      setTimeout(() => {
        const remainingProjects = filteredProjects.length - loadedProjectsCount;
        const additionalProjects = Math.min(projectsPerPage, remainingProjects);
        setLoadedProjectsCount(prevCount => prevCount + additionalProjects);
        setIsLoading(false);
      }, 1000); // Añade un retardo de 1 segundo para simular una carga real
    }
  };


  //manejo de tarjetas de projectCard:
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar proyectos..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredProjects.slice(0, loadedProjectsCount).map((project, index) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <img src={project.thumbnail} alt={`Thumbnail for ${project.title}`} />
            <p>{project.description}</p>
            <div>
              <strong>Tags:</strong> {project.tags.join(', ')}
            </div>
            <hr />
          </li>
        ))}
        <div ref={lastProjectRef}></div>
      </ul>
      {isLoading && <p>Loading...</p>}
    </div>
  );
}
