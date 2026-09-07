import { useState } from 'react';
import './ProjectForm.css';

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      setError('Please enter both a title and a description.');
      return;
    }

    onAddProject({ title, description });
    setTitle('');
    setDescription('');
    setError('');
  }

  return (
    <section className="project-form" aria-labelledby="add-project-heading">
      <h2 id="add-project-heading" className="project-form__heading">
        Add Project
      </h2>
      <form className="project-form__form" onSubmit={handleSubmit}>
        <label className="project-form__label" htmlFor="project-title">
          Title
        </label>
        <input
          id="project-title"
          className="project-form__input"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-required="true"
        />

        <label className="project-form__label" htmlFor="project-description">
          Description
        </label>
        <textarea
          id="project-description"
          className="project-form__textarea"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={4}
          aria-required="true"
        />

        {error ? (
          <p className="project-form__error" role="alert">
            {error}
          </p>
        ) : null}

        <button className="project-form__button" type="submit">
          Add
        </button>
      </form>
    </section>
  );
}

export default ProjectForm;
