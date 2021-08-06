import netflixLogo from "../../assets/images/Netflix-logo-red-black-png.png";
import netflixAvatar from "../../assets/images/Netflix-avatar.png";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";

import "./header.css";

const Header = (props) => {
  return (
    <nav className="header">
      <div className="logo-container">
        <button className="buttontoOpen" onClick={props.onClick}>
          <div className="modalButton"></div>
          <div className="modalButton"></div>
          <div className="modalButton"></div>
        </button>
        <img className="netflix-logo" src={netflixLogo} alt="netflixLogo" />
      </div>
      <div>
        <ul className="linkContainer">
          <li className="linkItems">
            <Link to="/">Home</Link>
          </li>
          <li className="linkItems">
            <Link to="/">Tv Shows</Link>
          </li>
          <li className="linkItems">
            <Link to="/">movies</Link>
          </li>
          <li className="linkItems">
            <Link to="/">originals</Link>
          </li>
          <li className="linkItems">
            <Link to="/">Recently added</Link>
          </li>
          <li className="linkItems">
            <Link to="/list">My List</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="parentUl">
          <li className="childrenLi">
            <Link to="/">
              <SearchIcon />
            </Link>
          </li>
          <li className="childrenLi">
            <Link to="/">Kids</Link>
          </li>
          <li className="childrenLi">
            <Link to="/">DVDS</Link>
          </li>
          <li className="childrenLi">
            <Link to="/">
              <NotificationsIcon />
            </Link>
          </li>
          <li className="childrenLi">
            <img src={netflixAvatar} alt="avatar-logo" className="avatarLogo" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
