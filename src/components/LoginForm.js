import React, { Component } from "react";

export default class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      passowrd: "",
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {};

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>
          <label>Passowrd:</label>
          <input
            type="Passowrd"
            name="Passowrd"
            id="Passowrd"
            value={this.state.passowrd}
            onChange={this.handleChange}
          ></input>
          <br />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
