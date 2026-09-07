import ProjectCard from './ProjectCard';
import './ProjectList.css';

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <section className="project-list" aria-live="polite">
        <p className="project-list__empty">No projects match your search.</p>
      </section>
    );
  }

  return (
    <section className="project-list" aria-label="Project list">
      <ul className="project-list__items">
        {projects.map((project) => (
          <li key={project.id} className="project-list__item">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectList;
