import React from 'react';
import mellow from '../images/mellow-logo.png';
import { Link } from 'react-router-dom';
import userIcon from '../assets/User1.png'
import { signOut} from "firebase/auth";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState , useEffect } from 'react';

const Header = () => {


   // Listen to changes in the authentication state
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
 
  
  //Log the user Out 
  const logOut = async () => {
    try {
      await signOut(auth);
      window.location.reload();
      console.log("logged out");
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
                      <li> <Link className="nav-bar-link" to={"/"}>Home</Link> </li>
                      <li> <Link className="nav-bar-link" to={"about"}>About</Link> </li>
                      <li> <Link className="nav-bar-link" to={"contact"}>Contact</Link> </li>
                        {!auth.currentUser && (
                        <li>
                          <Link className="nav-bar-link" to={"/login"}>
                            Login/Sign-Up <i className="bi bi-person"></i>
                          </Link>
                        </li>
                      )}
                      {auth.currentUser && (
                        <li className="user-logo user-display"  onClick={logOut}>
                          <img
                          
                            className="user"
                            title="Log Out"
                            src={userIcon}
                            alt="user Icon"
                          />
                          <span style={{ fontSize: "small", marginLeft: "5px" }}>
                            {auth.currentUser.email.split("@")[0]}
                          </span>
                        </li>
                      )}
                </ul>
           </nav>  
          </div>
  );
};

export default Header;
