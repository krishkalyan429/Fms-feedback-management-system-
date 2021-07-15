import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { Button ,Nav, Navbar,Form,FormControl,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseSlider from "../components/courseSlider";

// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Badge,
//   Box,
// } from "@material-ui/core";
class Home extends Component {
    render() { 
        return ( 
          
            <div >
  <Navbar bg="primary" variant="dark">
  <Navbar>
    <Navbar.Brand href="#home">
      <img
        src="/images/Fmslogo.jpeg"
        width="80"
        height="50"
        className="d-inline-block align-center"
        alt="Fms logo"
      />
    </Navbar.Brand>
  </Navbar>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#courses">Courses</Nav.Link>
      <Nav.Link href="#contactus">ContactUs</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
  <div align ="center" disply="flex" >
  < CourseSlider/>
  </div> 
</div>
         );
    }
}
 
export default Home;