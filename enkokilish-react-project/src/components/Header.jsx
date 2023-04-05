import React from 'react';
import mellow from '../images/mellow-logo.png';
import { Link } from 'react-router-dom';
import userIcon from '../assets/User1.png'
import { signOut} from "firebase/auth";
import { auth } from "../config/firebase";

const Header = () => {

  const logOut = async () => {
    try {
      await signOut(auth);
      console.log("logged out ")
    } catch (err) {
      console.error(err);
    }
  };

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
          { (auth) && <li className='user-logo'> <img onClick={logOut}  className="user" title='Log Out' src={userIcon} alt="user Icon" /> </li>}
         </ul>
      </nav>
     
     
    </div>
  );
};

export default Header;
