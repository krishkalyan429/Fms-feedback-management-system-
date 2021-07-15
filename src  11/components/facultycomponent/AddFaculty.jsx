import React, { Component } from 'react';
import {
    Typography,
    TextField,
    Grid,
    Paper,
    Button,
    Box,
  } from "@material-ui/core";
  
 
  import { Link } from "react-router-dom";
  import FacultyService from "../../services/FacultyService";
class AddFaculty extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            faculty:{
                facultyId: 0,
                facultyName:"",
                mobile:"",
                email:"",
            },
         };
    }
    handleChange = (event) => {
      console.log("handleChange");
      const faculty = { ...this.state.faculty };
      console.log(faculty);
      faculty[event.target.name] = event.target.value;
      this.setState({ faculty: faculty });
      //this.setState({ user });
    };
  
    handleFormSubmit = (event) => {
      event.preventDefault();
      FacultyService.addFaculty(this.state.faculty).then((res) =>{
        const faculty = {

          facultyId: 0,
    
          facultyName: "",
    
          mobile: "",
    
          email: "",
    
        }
    
        this.setState({
    
          faculty:faculty
    
        })
        alert("Added Successfully");
    }
  )
    };
    render() { 
        return ( 
            <div>
            <Grid
            item
            md={5}
              style={{
              marginTop: "100px",
              marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Paper elevation={3} style={{ padding: "30px", marginTop: "10px" }}>
              <Box 
                  style={{
                      backgroundColor : "lightgray",
                      marginBottom:"10px",
                      padding:"10px",
                      textAlign:"left",
                      marginTop: "10px",
                  }} 
                  >
                     <Typography variant="h5" style={{ marginTop: "10px" }}>
                 Faculty Registeration
              </Typography>
              </Box>
                <form onSubmit={this.handleFormSubmit}>
                  <TextField
                    id="outlined-basic"
                    label="FacultyName"
                    placeholder="Enter Faculty Name"
                    variant="outlined"
                    name="facultyName"
                    value={this.state.faculty.facultyName}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />

                  <TextField
                   id="outlined-number"
                   label="Mobile"
                   type="number"
                   InputLabelProps={{
                     shrink: true,
                   }}
                   placeholder="Enter your mobile number"
                   variant="outlined"
                   name="mobile"
                    value={this.state.faculty.mobile}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />

                  <TextField
                    id="outlined-Email"
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    variant="outlined"
                    name="email"
                    value={this.state.faculty.email}
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
                  to="/facultylist"
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Save
                </Button>
                {/* <button onClick={() => alert('Added Successfully')}>
        Save
      </button > */}

              </div>
                </form>
              </Paper>
            </Grid>
          </div>
         );
    }
}
 
export default AddFaculty;