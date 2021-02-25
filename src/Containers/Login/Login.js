import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import { navigation } from "../../constants.js";

const initialState = { email: "", password: "" };

function Login() {
  const [form, setForm] = useState(initialState);

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm(initialState);
  };

  return (
    <div>
      <h1>Login page</h1>
      <form className="login-form" onSubmit={formSubmit}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={inputHandler}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={inputHandler}
          />
        </label>
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
