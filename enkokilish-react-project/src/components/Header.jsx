import React from 'react';
import mellow from '../images/mellow-logo.png';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <img className='mellow-logo' src={mellow} />
      </div>
      <nav className='nav-bar'>
         <ul>
          <li>Home </li>
          <li>Contact</li>
          <li>About</li>
          <li>Login/SignUp</li>
         </ul>
      </nav>
     
     
    </div>
  );
};

export default Header;
