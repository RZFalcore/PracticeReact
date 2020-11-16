import React, { Component } from "react";
import shortid from "shortid";
import { validate } from "indicative/validator";

const Gender = {
  MALE: "male",
  FEMALE: "female",
};

const rules = {
  login: "required|string",
  email: "required|email",
  password: "required|min:4",
};

export default class SignUpForm extends Component {
  state = {
    login: "",
    email: "",
    password: "",
    terms: false,
    gender: null,
    age: "",
  };

  loginInputId = shortid.generate();
  emailInputId = shortid.generate();
  passwordInputId = shortid.generate();
  termsInputId = shortid.generate();

  handleInputsChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(type, checked);
    this.setState({ [name]: type === "checked" ? checked : value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { login, email, password } = this.state;
    const { onSignUp } = this.props;

    validate({ login, email, password }, rules)
      .then((data) => {
        onSignUp({ ...this.state });
        this.formReset();
      })
      .catch(console.error);
  };

  formReset = () => {
    this.setState({
      login: "",
      email: "",
      password: "",
      terms: false,
      gender: null,
      age: "",
    });
  };

  render() {
    const { login, email, password, terms, gender, age } = this.state;

    return (
      <form
        onSubmit={this.handleFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "40px auto",
          width: "400px",
        }}
      >
        <label htmlFor={this.loginInputId}>
          Login
          <input
            type="text"
            name="login"
            id={this.loginInputId}
            value={login}
            onChange={this.handleInputsChange}
          />
        </label>
        <label htmlFor={this.emailInputId}>
          Email
          <input
            type="email"
            name="email"
            id={this.emailInputId}
            value={email}
            onChange={this.handleInputsChange}
          />
        </label>
        <label htmlFor={this.passwordInputId}>
          Password
          <input
            type="password"
            name="password"
            id={this.passwordInputId}
            value={password}
            onChange={this.handleInputsChange}
          />
        </label>
        <label htmlFor={this.termsInputId}>
          <input
            type="checkbox"
            name="terms"
            id={this.termsInputId}
            value={terms}
            onChange={this.handleInputsChange}
          />
        </label>
        <section>
          <h2>Choose your gender</h2>
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            onChange={this.handleInputsChange}
            value={Gender.MALE}
            checked={gender === Gender.male}
          />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            onChange={this.handleInputsChange}
            value={Gender.Female}
            checked={gender === Gender.Female}
          />
        </section>
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleInputsChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">Young</option>
            <option value="26-50">Adult</option>
            <option value="50-100">Old</option>
          </select>
        </label>
        <button type="submit">Sign up</button>
      </form>
    );
  }
}
