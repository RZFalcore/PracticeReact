import React, { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import { validateAll } from "indicative/validator";

import ValidatonError from "./ValidationError";

const Gender = {
  MALE: "male",
  FEMALE: "female",
};

const rules = {
  login: "required|string",
  email: "required|email",
  password: "required|string|min:6",
};

const messages = {
  "login.required": "Type login!",
  "email.required": "Enter valid email",
  "email.email": "Email is invalid",
  "password.required": "Type password",
  "password.min": "At least 6 chars",
};

export default class SignUpForm extends Component {
  state = {
    login: "",
    email: "",
    password: "",
    agreed: false,
    gender: null,
    age: "",
    errors: null,
  };

  static propTypes = {
    onSignUp: PropTypes.func.isRequired,
  };

  loginInputId = shortid.generate();
  emailInputId = shortid.generate();
  passwordInputId = shortid.generate();

  //! Single change handler!
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  //   handleEmailChange = (e) => {
  //     this.setState({ email: e.target.value });
  //   };

  handleSubmit = (e) => {
    e.preventDefault();

    const { login, email, password } = this.state;
    const { onSignUp } = this.props;

    validateAll({ login, email, password }, rules, messages)
      .then((data) => {
        console.log("Data:", data);

        onSignUp({ ...this.state });
        this.formReset();
      })
      .catch((errors) => {
        console.log("Errors:", errors);

        const formattedErrors = {};
        errors.forEach((error) => {
          formattedErrors[error.field] = error.message;
        });
        this.setState({ errors: formattedErrors });
      });
  };

  formReset = () => {
    this.setState({
      login: "",
      email: "",
      password: "",
      agreed: false,
      gender: null,
      age: "",
    });
  };

  render() {
    const { login, email, password, agreed, gender, age, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginInputId}>
          Login:
          <input
            type="text"
            id={this.loginInputId}
            onChange={this.handleChange}
            value={login}
            name="login"
          />
          {errors && <ValidatonError label={errors.login} />}
        </label>
        <label htmlFor={this.emailInputId}>
          Email:
          <input
            type="text"
            id={this.emailInputId}
            value={email}
            onChange={this.handleChange}
            name="email"
          />
          {errors && <ValidatonError label={errors.email} />}
        </label>
        <label htmlFor={this.loginInputId}>
          Password:
          <input
            type="text"
            id={this.passwordInputId}
            onChange={this.handleChange}
            value={password}
            name="password"
          />
          {errors && <ValidatonError label={errors.password} />}
        </label>
        <label htmlFor="">
          Agree to terms
          <input
            type="checkbox"
            checked={agreed}
            name="agreed"
            onChange={this.handleChange}
          />
        </label>
        <section>
          <h2>Choose your gender</h2>
          <label htmlFor="">
            Male
            <input
              type="radio"
              name="gender"
              value={Gender.MALE}
              checked={gender === Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            Female
            <input
              type="radio"
              name="gender"
              value={Gender.FEMALE}
              checked={gender === Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <label htmlFor="">
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-40">26-40</option>
            <option value="40-60">40-60</option>
          </select>
        </label>
        <button type="submit">Sign up!</button>
      </form>
    );
  }
}
