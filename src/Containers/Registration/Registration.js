import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constants.js";
import "./Registration.css";

const initialState = { name: "", email: "", password: "" };

function Registartion() {
  const [form, setForm] = useState(initialState);

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <h1>Registration page</h1>
      <form className="registration-form">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={inputHandler}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={inputHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={inputHandler}
        />
        <button type="submit" onClick={formSubmit}>
          Sign up
        </button>
        <p>
          If you already have account try to{" "}
          <NavLink to={navigation.login}>Log In!</NavLink>
        </p>
      </form>
    </div>
  );
}

export default Registartion;
