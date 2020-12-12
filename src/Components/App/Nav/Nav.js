import React from "react";
import { NavLink } from "react-router-dom";

const navStyle = {
  display: "flex",
  flexDirection: "row-reverse",
  width: "90vw",
  margin: "0px auto",
};

const listStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "40%",
  listStyle: "none",
};

const activeLink = { color: "red" };

const Nav = () => (
  <nav style={navStyle}>
    <ul style={listStyle}>
      <li>
        <NavLink to="/" exact activeStyle={activeLink}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/articles" activeStyle={activeLink}>
          Articles
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={activeLink}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeStyle={activeLink}>
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
