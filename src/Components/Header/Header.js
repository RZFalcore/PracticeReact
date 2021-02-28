import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants";
import { logOutOperation } from "../../redux/auth/authOperations";
import styles from "./Header.module.css";

const Header = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const logOut = () => {
    dispatch(logOutOperation(token));
    console.log("Log out...");
  };

  return (
    <div className={styles.headerWrapper}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink className={styles.link} to={navigation.home}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to={navigation.login}>
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to={navigation.registration}>
              Sign Up
            </NavLink>
          </li>
        </ul>
        <button className={styles.navButton} onClick={logOut}>
          Log out
        </button>
      </nav>
    </div>
  );
};

export default Header;
