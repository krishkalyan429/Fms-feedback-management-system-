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
import FacultyService from "../../services/FacultyService";

class UpdateFaculty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faculty: {
        facultyId: 0,
        facultyName: "",
        mobile: "",
        email: "",
      },
    };
  }
  componentDidMount() {
    FacultyService.getFacultyById(this.props.match.params.id).then((res) =>
      this.setState({ faculty: res.data })
    );
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
        let faculty  ={ id: this.state.facultyId, facultyName: this.state.facultyName, 
            mobile: this.state.mobile, email: this.state.email
        };
        console.log(JSON.stringify(faculty));
       FacultyService.updateFaculty(this.state.faculty,this.state.faculty.facultyId).then((res) =>{
            this.props.history.push('/facultylist');
    });
    alert("Updated  Successfully");
  };
  handleChange = (event) => {
    console.log("handleChange");
    const faculty = { ...this.state.faculty };
    faculty[event.target.name] = event.target.value;
    this.setState({ faculty : faculty });
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
              <Typography variant="h6">Update Faculty</Typography>
            </Box>
            <form onSubmit={this.handleFormSubmit}>
            <TextField
                    id="outlined-basic"
                    label="FacultyId"
                    type="number"
                    placeholder="Enter faculty Id"
                    name="facultyId"
                    value={this.state.faculty.facultyId}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
        
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
                    id="outlined-basic"
                    label="Mobile"
                    placeholder="Enter your mobile number"
                    variant="outlined"
                    name="mobile"
                    value={this.state.faculty.mobile}
                    onChange={this.handleChange}
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                   <TextField
                    id="outlined-basic"
                    label="Email"
                    placeholder="Enter your email"
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
                <Button variant="contained" color="primary" type="submit" >
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
  export default UpdateFaculty;