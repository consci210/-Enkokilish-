import React from 'react';
import mellow from '../images/mellow-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <img className='mellow-logo' src={mellow} />
      </div>
      <nav className='nav-bar'>
         <ul>
          <li> <Link className="nav-bar-link" to={"/"}>Home</Link>    </li>
          <li>  <Link className="nav-bar-link" to={"about"}>About</Link>  </li>
          <li>  <Link className="nav-bar-link" to={"contact"}>Contact</Link>  </li>
          <li>  <Link className="nav-bar-link" to={"/login"}>Login/Sign-Up <i className='bi bi-person'></i></Link>  </li>
         </ul>
      </nav>
     
     
    </div>
  );
};

export default Header;
