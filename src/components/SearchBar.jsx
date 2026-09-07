import './SearchBar.css';

function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="search-bar">
      <label className="search-bar__label" htmlFor="project-search">
        Search projects
      </label>
      <input
        id="project-search"
        className="search-bar__input"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label="Search projects"
      />
    </div>
  );
}

export default SearchBar;
