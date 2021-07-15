import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import axios from "axios";
import Joi from "joi-browser";
import {loginAction} from "../actions/loginAction"
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    // Added user object
    this.state = {
      user: {
        userId: "",
        password: "",
        role: "",
      },
      errors: {},
      errMsg: "",
    };
  }
  // schema to validate
  schema = {
    userId: Joi.string().min(3).alphanum().required(),
    password: Joi.string().min(3).alphanum().required(),
    role: Joi.string().required(),
  };

  // form validation method
  validate = () => {
    const errors = {};
    // Validate account details with schema
    const result = Joi.validate(this.state.user, this.schema, {
      abortEarly: false,
    });
    console.log(result);

    // Initialize error object with errors, if validate method returns errors
    if (result.error !== null) {
      for (let err of result.error.details) {
        errors[err.path[0]] = err.message;
      }
    }

    // return null if no errors otherwise return errors
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = (event) => {
    console.log("handleChange");
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    //this.setState({ user: user });
    this.setState({ user });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const errors = this.validate(); // null / errors
    // Set state error object with errors or empty object based on
    // errors return by the validate() method
    this.setState({ errors: errors || {} });
    // if errors exists in the form , return to the login page
    console.log(errors);

    if (errors) return;

    // if no form errors, send credential to backend for verification
    //UserService.login(this.state.account).then((res)=>this.props.history.push("/users")).catch((error.response)=>console.log(error.response));
    //console.log(this.state.account);
    this.props.loginAction(this.state.user).then(res=> this.props.history.push("/products"));
      
/*
    axios
      .post("http://localhost:8082/login", this.state.user)
      .then((res) => this.props.history.push("/products"))
      .catch((error) => this.setState({ errMsg: error.response.data.message }));
      */
  };

  render() {
    return (
      <div>
        <Typography variant="h3" style={{ marginTop: "100px" }}>
          Login
        </Typography>

        <form
          className="w-50 mx-auto border rounded mt-3 p-3"
          onSubmit={this.handleSubmit}
        >
          {this.state.errMsg && (
            <div className="alert alert-danger" role="alert">
              {this.state.errMsg}
            </div>
          )}
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label float-start"
            >
              User Id
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="userId"
              value={this.state.user.userId}
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.userId}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label float-start"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={this.state.user.password}
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.password}
              </p>
            )}
          </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            name="role"
            onChange={this.handleChange}
          >
            <option>Role</option>
            <option value="customer">Customer</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {this.state.errors && (
            <p className="text-danger font-monospace text-start">
              {this.state.errors.role}
            </p>
          )}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  //  const { fakestore } = state;
  return {
    login: state.account.login,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    loginAction,
  };
};

export default connect(mapStateToProps,mapDispatchToProps())(Login);
