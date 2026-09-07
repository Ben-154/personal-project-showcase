import { useCallback, useMemo, useState } from 'react';

/**
 * Keeps project list and search query together at one source of truth.
 * Returns filtered projects so list components stay presentational.
 */
export function useProjects(initialProjects = []) {
  const [projects, setProjects] = useState(initialProjects);
  const [searchQuery, setSearchQuery] = useState('');

  const addProject = useCallback(({ title, description }) => {
    setProjects((current) => [
      {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
      },
      ...current,
    ]);
  }, []);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
    );
  }, [projects, searchQuery]);

  return {
    projects,
    searchQuery,
    setSearchQuery,
    addProject,
    filteredProjects,
  };
}
