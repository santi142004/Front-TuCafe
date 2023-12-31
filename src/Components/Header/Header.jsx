
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faMugHot, faSearch } from '@fortawesome/free-solid-svg-icons';
import {  NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div id="menu-btn">
        {/* <FontAwesomeIcon icon={faBars} /> */}
      </div>

      <a href="#" className="logo">Tu Café</a> 
      {/* <FontAwesomeIcon icon={faMugHot} /> ---- esrto va en ///  <a href="#" className="logo">Tu Café *aqui* </a>   */}

      <nav className="navbar">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/lugares">Lugares</NavLink>
        <NavLink to="/acerca">Nosotros</NavLink>
        <NavLink to="/opiniones">Reseñas</NavLink>
        <NavLink to="/reserva">Reservas</NavLink> 
      </nav>

      <div className="search-bar">
        <input type="text" id="search-input" placeholder="Buscar Lugar..." />
        <button id="search-btn">
          {/* <FontAwesomeIcon icon={faSearch} /> */}
        </button>
      </div>
      

      <li>
  <NavLink to="/login" className="btn-header">
    Acceder
  </NavLink>
</li>

    </header>
  );
}

export default Header;
