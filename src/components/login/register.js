import React from "react";
import Header from "../HeaderFooter/header";
const registerUrl = "http://localhost:5000/api/auth/register";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Nikitha",
      email: "nikitha@gmail.com",
      password: "12345678",
      phone: "79878879",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = () => {
    fetch(registerUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(this.props.history.push("/"));
  };

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <h3>Register</h3>
          <form className="row">
            <div class="form-group col-md-6">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={this.state.name}
                class="form-control"
                id="name"
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Your email"
                value={this.state.email}
                class="form-control"
                id="email"
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="password">Password</label>
              <input
                type="text"
                name="password"
                placeholder="Enter Your Password"
                value={this.state.password}
                class="form-control"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="phone">phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={this.state.phone}
                class="form-control"
                id="phone"
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-success" onClick={this.handleSubmit}>
              Register
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Register;
