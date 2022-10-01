import React, { Component } from "react";

export default class User extends Component {
  constructor() {
    super();
    /* Setting the state of the component. */
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.inputchange = this.inputchange.bind(this);
  }
  inputchange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handlesubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handlesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={this.state.name || ""}
              onChange={this.inputchange}
              className="form-control"
              name="name"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>{" "}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={this.state.email || ""}
              onChange={this.inputchange}
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={this.state.password || ""}
              onChange={this.inputchange}
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
