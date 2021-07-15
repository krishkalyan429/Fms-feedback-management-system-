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
import ParticipantFeedbackService from "../../services/ParticipantFeedbackService";

class AddParticipant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participant:{
        participantId: "",
        facultyId: "", 
        courseId: "",
         feedbackSno: "",
        marksQuestion1:"",
        marksQuestion2:"",
        marksQuestion3:"",
        marksQuestion4:"",
        marksQuestion5:"",
        feedbackdate:""
      }

    };
  }
  
  
  handleChange = (event) => {
    console.log("handleChange");
    // const participantFeedback = { ...this.state.participantFeedback };
    const participant = { ...this.state.participant };
    console.log(participant);
    // participantFeedback[event.target.name] = event.target.value;
    participant[event.target.name] = event.target.value;
    // this.setState({ participantFeedback : participantFeedback});
    this.setState({ participant : participant});
     console.log(participant);
    // const participant = { ...this.state.participantFeedback.participant };
    // console.log(participant);
    // participant[event.target.name] = event.target.value;
    // this.setState({ participantId : participantFeedback.participant.participantId});
    //this.setState({ user });
 };

//   changeParticipantIdHandler = (e) => {
//     this.setState({id: e.target.value});
// }

// changeFacultyIdHandler = (e) => {
//   this.setState({id: e.target.value});
// }

// changeCourseIdHandler = (e) => {
//   this.setState({id: e.target.value});
// }

// changeFeedbackSnoHandler = (e) => {
//   this.setState({id: e.target.value});
// }

  // validateParticipant = () => {
  //   const partData={...this.state.participant}
  //   const errors = {};
  
  //   if (!partData.participantName) {
  //     errors.participantName = 'participant name cannot be empty';
  //   } else if (partData.participantName.length > 20) {
  //     errors.participantName = 'Name cannot exceed 20 characters';
  //   }

  //   if (!partData.address) {
  //     errors.address = 'Address cannot be empty';
  //   }
  
  //   if (!partData.mobile) {
  //     errors.mobile = 'mobile number cannot be empty';
  //   }else if(!/^[0-9]{10}$/i.test(partData.mobile)) {
  //     errors.mobile='Mobile number Should be 10 Digits';
  //   } 
  
  //   if (!partData.email) {
  //     errors.email = 'email cannot be empty';
  //   } else if (!/^[A-Z0-9._%+-]+@[gmail,outlook,yahoo]+\.[A-Z]{2,4}$/i.test(partData.email)) {
  //     errors.email = 'Invalid Email Address';
  //   }
  
  //   return Object.keys(errors).length === 0 ? null : errors;
  // };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("came here");
  const participantFeedback= {
      feedbackNo: 0,
      marksQuestion1: this.state.participant.marksQuestion1,
      marksQuestion2: this.state.participant.marksQuestion2,
      marksQuestion3: this.state.participant.marksQuestion3,
      marksQuestion4: this.state.participant.marksQuestion4,
      marksQuestion5: this.state.participant.marksQuestion5,
      participant: {
        participantId: this.state.participant.participantId,
        participantName: "",
        address: "",
        mobile: "",
        email: ""
      },
      faculty: {
        facultyId: this.state.participant.facultyId,
        facultyName: "",
        mobile: "",
        email: ""
      },
      course: {
        courseId: this.state.participant.courseId,
        courseName: "",
        courseDescription: "",
        duration: "",
      },
      averageRating: 0,
      feedbackdate: this.state.participant.feedbackdate,
      feedbackMaster: {
        feedbackSno: this.state.participant.feedbackSno,
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: ""
      }
    }
    console.log(participantFeedback);

    // const errors=this.validateParticipant();
    //   this.setState({ errors: errors || {} });
    //   if(errors)
    //   return
    ParticipantFeedbackService.addParticipantFeedback(participantFeedback).then((res) =>
    {
      const participant={
        participantId: "",
        facultyId: "", 
        courseId: "",
         feedbackSno: "",
        marksQuestion1:"",
        marksQuestion2:"",
        marksQuestion3:"",
        marksQuestion4:"",
        marksQuestion5:"",
        feedbackdate:""
      }   
      this.setState({
        participant:participant
      })
      alert("Added Successfully");
  }
)

  };

//   componentDidMount() {
//     ParticipantService.getAllParticipants()
//     .then((res) => {
//         this.setState({participants: res.data});
//     });
// }

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
              <Typography variant="h6">Feedback</Typography>
            </Box>
            <form onSubmit={this.handleFormSubmit}>
            <TextField
                id="outlined-basic"
                label="Date"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
                name="feedbackdate"
                value={this.state.participant.feedbackdate}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
             
              {/* {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.address}
                           </p>
                         )} */}
              <TextField
                id="outlined-basic"
                label="Participant Id"
                variant="outlined"
                placeholder="Enter your ParticipantId"
                name="participantId"
                value={this.state.participant.participantId}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              {/* {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.participantName}
                           </p>
                         )}
              */}
              
             
              <TextField
                id="outlined-basic"
                label="Faculty Id"
                variant="outlined"
                placeholder="Enter Faculty Id"
                // type="number"
                name="facultyId"
                value={this.state.participant.facultyId}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              {/* {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.email}
                           </p>
                         )} */}
             
              <TextField
                id="outlined-basic"
                label="Course Id"
                variant="outlined"
                placeholder="Enter Course Id"
                name="courseId"
                value={this.state.participant.courseId}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              {/* {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.mobile}
                           </p>
                         )} */}

              <TextField
                id="outlined-basic"
                label="FeedbackSno"
                variant="outlined"
                placeholder="Enter FeedbackSno"
                name="feedbackSno"
                value={this.state.participant.feedbackSno}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              {/* {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.address}
                           </p>
                         )} */}
              <TextField
                id="outlined-basic"
                label="Technical Doubts Clarification"
                variant="outlined"
                placeholder="Rating Between 1 to 5"
                name="marksQuestion1"
                value={this.state.participant.marksQuestion1}
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
                id="outlined-basic"
                label="Interaction With Participants"
                variant="outlined"
                placeholder="Rating Between 1 to 5"
                name="marksQuestion2"
                value={this.state.participant.marksQuestion2}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              {/* {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.address}
                           </p>
                         )} */}
                <TextField
                id="outlined-basic"
                label="Explaination With Real Time Examples"
                variant="outlined"
                placeholder="Rating Between 1 to 5"
                name="marksQuestion3"
                value={this.state.participant.marksQuestion3}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              {/* {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.address}
                           </p>
                         )} */}
                <TextField
                id="outlined-basic"
                label="Teaching Skills"
                variant="outlined"
                placeholder="Rating Between 1 to 5"
                name="marksQuestion4"
                value={this.state.participant.marksQuestion4}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              {/* {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.address}
                           </p>
                         )} */}
                <TextField
                id="outlined-basic"
                label="Technical clarification"
                variant="outlined"
                placeholder="Rating Between 1 to 5"
                name="marksQuestion5"
                value={this.state.participant.marksQuestion5}
                onChange={this.handleChange}
                fullWidth
                style={{ marginBottom: 10 }}
              />
              {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.address}
                           </p>
                         )}

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: "10px" }}
                  component={Link}
                  to="/participantFeedbacklist"
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

export default AddParticipant;