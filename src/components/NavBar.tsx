import '../styles/_navbar.scss';
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';



export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="search-container">
        <input type="text" placeholder="Search for anything" />
        <button className="search-button">
          <FiSearch />
        </button>
      </div>

      <div className="right-section">
        <a className="docs-link" href="#">Docs</a>
        <FiBell className="notifications" />
        <div className="profile">

          <img src="/images/avatar.png" alt="user" />
          <span className="name">Mishael</span>
          <FiChevronDown className="dropdown" />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
