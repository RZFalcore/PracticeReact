import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants";
import styles from "./Header.module.css";

const Header = (props) => (
  <div className={styles.headerWrapper}>
    <NavLink className={styles.link} to={navigation.home}>
      Home
    </NavLink>
    <NavLink className={styles.link} to={navigation.login}>
      Log In
    </NavLink>
    <NavLink className={styles.link} to={navigation.registration}>
      Sign Up
    </NavLink>
  </div>
);

export default Header;
