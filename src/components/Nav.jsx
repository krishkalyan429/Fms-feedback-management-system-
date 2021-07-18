import React from "react";
import {
  AppBar,
  Toolbar,
  Button,

} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import {  Navbar,DropdownButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const nav = () => {
  return (
    <header>
    <AppBar style={{ backgroundColor: '#FF9933' }}>
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
        <Button color="inherit" component={NavLink} to="/">
          Home
        </Button>
       
        <DropdownButton id="dropdown-basic-button" title="Participant"  >
        
        <Button color="inherit" component={NavLink} to="/addparticipant">
         Participant Registration
        </Button>
        
        <Button color="inherit" component={NavLink} to="/participantlist">
         Edit Your Details
        </Button>
        
        <Button color="inherit" component={NavLink} to={"/Courses"}>
           CourseList
          </Button>
          
          </DropdownButton>
         
          <DropdownButton id="dropdown-basic-button" title="Faculty"  >
          
          <Button color="inherit" component={NavLink} to="/addfaculty">
          Faculty Registration
        </Button>
        <Button color="inherit" component={NavLink} to={"/course"}>
            Course Details
          </Button>
          
          <Button color="inherit" component={NavLink} to={"/facultylist"}>
            faculty list
          </Button>
         
          <Button color="inherit" component={NavLink} to="/participantlist">
         ParticipantList
        </Button>
        
        <Button color="inherit" component={NavLink} to={"/participantfeedbacklist"}>
            Feedback
          </Button>
          </DropdownButton>
        <Button color="inherit" component={NavLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={NavLink} to="/contactus">
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
    </header>
  );
};
export default nav;