import classes from "./SideBar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import netflixLogo from "../../assets/images/Netflix-logo-red-black-png.png";
import BackDrop from "./backdrop";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <BackDrop onClick={props.onClick}>
      <div className={classes.modal}>
        <div className={classes.netflixLogo}>
          <img
            className={classes.netflixLogo}
            src={netflixLogo}
            alt="netflixLogo"
          />
        </div>
        <ul className={classes.nav}>
          <li className={classes.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/">Tv Shows</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/">movies</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/">originals</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/">Recently added</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/list">My List</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/">
              <SearchIcon />
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/">Kids</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/">DVDS</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/">
              <NotificationsIcon />
            </Link>
          </li>
        </ul>
      </div>
    </BackDrop>
  );
};

export default SideBar;
