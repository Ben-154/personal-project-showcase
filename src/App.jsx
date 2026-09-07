import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import { initialProjects } from './data/initialProjects';
import { useProjects } from './hooks/useProjects';
import './styles/App.css';

function App() {
  const {
    searchQuery,
    setSearchQuery,
    addProject,
    filteredProjects,
  } = useProjects(initialProjects);

  return (
    <div className="app">
      <div className="app__container">
        <Header title="Personal Project Showcase App." />
        <ProjectForm onAddProject={addProject} />
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search Projects."
        />
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}

export default App;
