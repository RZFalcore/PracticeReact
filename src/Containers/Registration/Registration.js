import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { registrationOperation } from "../../redux/auth/authOperations";
import { navigation } from "../../constants.js";
import "./Registration.css";
import SignUp from "../../Components/SignUp/SignUp";

const initialState = { name: "", email: "", password: "" };

function Registartion() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(registrationOperation(form));
    // console.log(form);
    setForm(initialState);
  };;

  return (
    <div>
      <h1>Registration page</h1>
      <SignUp  />
      {/* <form className="registration-form" onSubmit={formSubmit}>
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
        <button type="submit">Sign up</button>
        <p>
          If you already have account try to{" "}
          <NavLink to={navigation.login}>Log In!</NavLink>
        </p>
      </form> */}
    </div>
  );
}

export default Registartion;
