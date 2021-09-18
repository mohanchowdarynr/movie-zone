import React from 'react';
import './navbar.css';
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <h1>Movies</h1>
      </div>
      <div className="headerIcons">
       <Link to="/" className="link">
            <div className="headerIcon">
              <HomeIcon />
              <p>Home</p>
            </div>
        </Link>
        <Link to="/Favorites" className="link">
            <div className="headerIcon">
              <FavoriteIcon />
              <p>Favorites</p>
            </div>
        </Link>
        <Link to="/WatchList" className="link">  
            <div className="headerIcon">
              <WatchLaterIcon />
              <p>WatchLater</p>
            </div>
          </Link>
          <Link to="/Search" className="link">
            <div className="headerIcon">
              <SearchIcon />
              <p>Search</p>
            </div>
          </Link>
            <div className="headerIcon">
              <PersonIcon />
              <p>Profile</p>
            </div>
         
      </div>
    </div>
  )
}

export default Navbar

