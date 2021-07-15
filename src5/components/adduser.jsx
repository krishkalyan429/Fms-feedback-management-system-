import React, { Component } from "react";
import {
  Typography,
  TextField,
  Grid,
  Paper,
  Button,
  Container,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 0,
        userName: "",
        email: "",
        mobileNo: "",
      },
    };
  }
  handleChange = (event) => {
    console.log("handleChange");
    const user = { ...this.state.user };
    console.log(user);
    user[event.target.name] = event.target.value;
    this.setState({ user: user });
    //this.setState({ user });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8082/users", this.state.user)
      .then((res) => this.props.history.push("/users"));
  };

  render() {
    return (
      <Container style={{ paddingTop: "70px" }}>
        <Grid
          item
          md={5}
          style={{
            marginTop: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Paper elevation={3} style={{ padding: "30px", marginTop: "10px" }}>
            <Box
              style={{
                backgroundColor: "lightgray",
                marginBottom: "10px",
                padding: "10px",
                textAlign: "left",
              }}
            >
              <Typography variant="h6">Add User</Typography>
            </Box>
            <form onSubmit={this.handleFormSubmit}>
              <TextField
                id="outlined-basic"
                label="Fullname"
                placeholder="Enter your full name"
                name="userName"
                value={this.state.user.userName}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
                id="outlined-email"
                label="Email"
                placeholder="Enter email"
                type="email"
                name="email"
                value={this.state.user.email}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              <TextField
                id="outlined-mobile"
                label="Mobile No"
                placeholder="Enter mobile number"
                name="mobileNo"
                value={this.state.user.mobileNo}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: "10px" }}
                  component={Link}
                  to="/users"
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Save
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Container>
    );
  }
}

export default AddUser;
