import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__thumbnail" aria-hidden="true">
        <span className="project-card__placeholder">X</span>
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
