import { NavLink } from "react-router-dom";
import logo from '../assets/logo-medium.png';
import './MenuBar.css'
function MenuBar() {
  return (
    <>
      <nav className="Navbar">
        <div className="logoNavbar">
          <img src={logo} alt="Company logo" />
        </div>
        <div className="navbarLinks">
          <NavLink 
            to="/" 
            exact
            className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
          >
            Home
          </NavLink>
          <NavLink 
            to="/posts" 
            className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
          >
            Alle posts
          </NavLink>
          <NavLink 
            to="/new-post" 
            className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
          >
            Nieuwe post maken
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default MenuBar;
