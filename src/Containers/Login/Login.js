import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import { navigation } from "../../constants.js";

function Login() {
  return (
    <div>
      <h1>Login page</h1>
      <form>
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Log in</button>
        <p>
          Don`t have an account?{" "}
          <NavLink to={navigation.registration}>Register here!</NavLink>
        </p>
      </form>
    </div>
  );
}

export default Login;
