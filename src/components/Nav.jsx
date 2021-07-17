import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import {  Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const nav = () => {
  return (
    <header>
    <AppBar color="primary">
      <Toolbar>
      <Navbar.Brand component={NavLink} to="/home">
      <img
        src="/images/FMSlogo.png"
        width="100"
        height="50"
        className="d-inline-block align-center"
        alt="Fms logo"
      />
    </Navbar.Brand>
        <Button color="inherit" component={NavLink} to="/home">
          Home
        </Button>
        <Button color="inherit" component={NavLink} to="/participantlist">
         Participant
        </Button>
        <Button color="inherit" component={NavLink} to="/facultylist">
          Faculty
        </Button>
        <Button color="inherit" component={NavLink} to={"/course"}>
            Course
          </Button>
          <Button color="inherit" component={NavLink} to={"/participantfeedbacklist"}>
            Feedback
          </Button>
        <Button color="inherit" component={NavLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={NavLink} to="/contact">
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
    </header>
  );
};
export default nav;