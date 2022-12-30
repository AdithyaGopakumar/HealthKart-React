import React from "react";
import Header from "../HeaderFooter/header";

const loginUrl = "http://localhost:5000/api/auth/login";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(loginUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.auth === false) {
          this.setState({ message: data.token });
        } else {
          sessionStorage.setItem("token", data.token);
          this.props.history.push("/");
        }
      });
  };

  render() {
    // console.log(this.props.history);
    return (
      <>
        <Header />
        <div className="container">
          <h3>Login</h3>
          <h3>{this.state.message}</h3>
          <form className="row">
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

            <button className="btn btn-success" onClick={this.handleSubmit}>
              Register
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
