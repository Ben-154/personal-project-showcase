import './Header.css';

function Header({ title }) {
  return (
    <header className="header" role="banner">
      <h1 className="header__title">{title}</h1>
    </header>
  );
}

export default Header;
