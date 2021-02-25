import React from "react";
import { NavLink } from "react-router-dom";
import "./Registartion.css";
import { navigation } from "../../constants.js";

function Registartion() {
  return (
    <div>
      <h1>Registration page</h1>
      <form>
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Sign up</button>
        <p>
          If you already have account try to
          <NavLink to={navigation.login}>log in</NavLink>
        </p>
      </form>
    </div>
  );
}

export default Registartion;
