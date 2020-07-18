import React, { Component } from "react";
import shortid from "shortid";
import { validateAll } from "indicative";

const Gender = {
  MALE: "male",
  FEMALE: "female",
};

export default class SignUpForm extends Component {
  state = {
    login: "",
    email: "",
    password: "",
    agreed: false,
    gender: null,
    age: "",
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

    const { onSignUp } = this.props;

    onSignUp({ ...this.state });

    this.formReset();
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
    const { login, email, password, agreed, gender, age } = this.state;
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
