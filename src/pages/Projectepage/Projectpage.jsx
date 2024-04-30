import React, { useState, useEffect, useRef } from 'react';
import projects from '../../const/projectCard'; // Importa los datos de los proyectos
import allTags from '../../const/allTags'; // Importa todos los tags disponibles

export function ProjectSearchPage() {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredProjects, setFilteredProjects] = useState([]); // Estado para almacenar los proyectos filtrados
  const [loadedProjectsCount, setLoadedProjectsCount] = useState(4); // Estado para contar los proyectos cargados
  const [isLoading, setIsLoading] = useState(false); // Estado para indicar si se está cargando más proyectos
  const [visibleTags, setVisibleTags] = useState([]);
  const [firstVisibleTagIndex, setFirstVisibleTagIndex] = useState(0);
  const projectsPerPage = 4; // Número de proyectos mostrados por página
  const lastProjectRef = useRef(null); // Referencia al último proyecto en la lista visible

  // Filtra los proyectos según el término de búsqueda
  useEffect(() => {
    const filtered = projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProjects(filtered);
  }, [searchTerm]);

  // Observa la intersección del último proyecto visible con el área visible en la pantalla
  useEffect(() => {
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

  // Maneja la intersección del último proyecto visible con el área visible en la pantalla
  const handleIntersection = (entries) => {
    const lastEntry = entries[0];
    if (lastEntry.isIntersecting && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        const remainingProjects = filteredProjects.length - loadedProjectsCount;
        const additionalProjects = Math.min(projectsPerPage, remainingProjects);
        setLoadedProjectsCount(prevCount => prevCount + additionalProjects);
        setIsLoading(false);
      }, 1000);
    }
  };

  // Maneja el clic en un tag para realizar una búsqueda
  const handleTagClick = (tag) => {
    setSearchTerm(tag);
  };

  // Maneja el clic en un tag dentro de un proyecto para realizar una búsqueda
  const handleProjectTagClick = (tag) => {
    setSearchTerm(tag);
  };

  // Maneja el clic en las flechas de navegación de los tags
  const handleArrowClick = (direction) => {
    if (direction === 'left' && firstVisibleTagIndex > 0) {
      setFirstVisibleTagIndex(prevIndex => prevIndex - 1);
    } else if (direction === 'right' && firstVisibleTagIndex < allTags.length - visibleTags.length) {
      setFirstVisibleTagIndex(prevIndex => prevIndex + 1);
    }
  };

  // Actualiza los tags visibles basados en el primer tag visible
  useEffect(() => {
    setVisibleTags(allTags.slice(firstVisibleTagIndex, firstVisibleTagIndex + 6));
  }, [firstVisibleTagIndex]);

  return (
    <div>
      {/* Input para la búsqueda de proyectos */}
      <input
        type="text"
        placeholder="Buscar proyectos..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {/* Navegación de tags */}
      <div>
        {firstVisibleTagIndex > 0 && <button onClick={() => handleArrowClick('left')}>{'<'}</button>}
        {visibleTags.map((tag, index) => (
          <button key={index} onClick={() => handleTagClick(tag)}>{tag}</button>
        ))}
        {firstVisibleTagIndex < allTags.length - visibleTags.length && <button onClick={() => handleArrowClick('right')}>{'>'}</button>}
      </div>
      {/* Lista de proyectos */}
      <ul>
        {filteredProjects.slice(0, loadedProjectsCount).map((project, index) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <img src={project.thumbnail} alt={`Thumbnail for ${project.title}`} />
            <p>{project.description}</p>
            <div>
              <strong>Tags:</strong> {project.tags.map((tag, index) => (
                <button key={index} onClick={() => handleProjectTagClick(tag)}>{tag}</button>
              ))}
            </div>
            <hr />
          </li>
        ))}
        {/* Referencia al último proyecto visible */}
        <div ref={lastProjectRef}></div>
      </ul>
      {/* Indicador de carga... podríamos agregar un gif o algo como carga*/}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}
