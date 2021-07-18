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
import ParticipantService from "../../services/ParticipantService";

class AddParticipant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participant: {
        participantId: 0,
        participantName: "",
        address :"",
        mobile: "",
        email: ""
      },
    };
  }
  handleChange = (event) => {
    console.log("handleChange");
    const participant = { ...this.state.participant };
    console.log(participant);
    participant[event.target.name] = event.target.value;
    this.setState({ participant : participant});
    //this.setState({ user });
  };

  validateParticipant = () => {
    const partData={...this.state.participant}
    const errors = {};
  
    if (!partData.participantName) {
      errors.participantName = 'participant name cannot be empty';
    } else if (partData.participantName.length > 20) {
      errors.participantName = 'Name cannot exceed 20 characters';
    }

    if (!partData.address) {
      errors.address = 'Address cannot be empty';
    }
  
    if (!partData.mobile) {
      errors.mobile = 'mobile number cannot be empty';
    }else if(!/^[0-9]{10}$/i.test(partData.mobile)) {
      errors.mobile='Mobile number Should be 10 Digits';
    } 
  
    if (!partData.email) {
      errors.email = 'email cannot be empty';
    } else if (!/^[A-Z0-9._%+-]+@[gmail,outlook,yahoo]+\.[A-Z]{2,4}$/i.test(partData.email)) {
      errors.email = 'Invalid Email Address';
    }
  
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const errors=this.validateParticipant();
      this.setState({ errors: errors || {} });
      if(errors)
      return
    ParticipantService.addParticipant(this.state.participant).then((res) =>
    {
      const participant = {
        participantId: 0,
        participantName: "",
        address:"",
        mobile: "",
        email: "",
      }
      this.setState({
        participant:participant
      })
      alert("Added Successfully");
  }
)

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
              <Typography variant="h6">Participant Registration</Typography>
            </Box>
            <form onSubmit={this.handleFormSubmit}>
              <TextField
                id="outlined-basic"
                label="Fullname"
                placeholder="Enter your full name"
                name="participantName"
                value={this.state.participant.participantName}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.participantName}
                           </p>
                         )}
             
               <TextField
                id="outlined-basic"
                label="Address"
                placeholder="Enter your Address"
                name="address"
                value={this.state.participant.address}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.address}
                           </p>
                         )}
             
              <TextField
                id="outlined-email"
                label="Email"
                placeholder="Enter email"
                type="email"
                name="email"
                value={this.state.participant.email}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.email}
                           </p>
                         )}
             
              <TextField
                id="outlined-mobile"
                label="Mobile No"
                placeholder="Enter mobile number"
                name="mobile"
                value={this.state.participant.mobile}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.mobile}
                           </p>
                         )}
             

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: "10px" }}
                  component={Link}
                  to="/participantlist"
                >
                  Cancel
                </Button>
                <Button variant="contained" 
                color="primary" 
                type="submit"
                 >
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

export default AddParticipant;