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
import FacultyService from "../../services/FacultyService";
import  CourseService from "../../services/CourseService"
import InputLabel from '@material-ui/core/InputLabel';
import ParticipantService from "../../services/ParticipantService";
import { makeStyles } from '@material-ui/core/styles';
import { NativeSelect } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

class AddParticipant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participant:{
        participantId: "",
        facultyId: "", 
        courseId: "",
        //  feedbackSno: 4,
        marksQuestion1:"",
        marksQuestion2:"",
        marksQuestion3:"",
        marksQuestion4:"",
        marksQuestion5:"",
        feedbackdate:"",
        faculties:[],
        courses:[],
        participants:[]
      }

    };
  }

 useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


  componentDidMount() {
    const participant = {...this.state.participant}
    FacultyService.getAllfaculties()
    .then((res) => {
      participant.faculties= res.data;
        this.setState({participant});
    });
    CourseService.getAllCourses().then((res) => {
      participant.courses=res.data;
        this.setState({ participant });
        });
    ParticipantService.getAllParticipants()
        .then((res) => {
          participant.participants=res.data;
                this.setState({participant});
            });
}


 
  
  handleChange = (event) => {
    console.log("handleChange");
    const participant = { ...this.state.participant };
    console.log(participant);
    participant[event.target.name] = event.target.value;
    this.setState({ participant : participant});
     console.log(participant);
 };

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
        feedbackSno: 4,
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
        feedbackdate:"",
        faculties:[],
        courses:[],
        participants:[]

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
    console.log(this.state.participant.faculties);
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
        <FormControl
        variant="outlined"
         fullWidth  >
        <InputLabel htmlFor="age-native-helper">Participant Name</InputLabel>
        <NativeSelect
          value={this.state.participant.participantId}
          onChange={this.handleChange}
          inputProps={{
            name: 'participantId'
          }}
          style={{ marginBottom: 10 }}
        >
           <option value={0}> </option>
         {this.state.participant.participants.map((participant)=>   
         <option value={participant.participantId}>{participant.participantName}</option> )}
        </NativeSelect>
             </FormControl>
              {/* {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.participantName}
                           </p>
                         )}
              */}
       
              {/* {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.email}
                           </p>
                         )} */}
                         
        <FormControl
        variant="outlined"
         fullWidth  >
        <InputLabel
        htmlFor="age-native-helper">Faculty Name</InputLabel>
        <NativeSelect variant="outlined"
          value={this.state.participant.facultyId}
          onChange={this.handleChange}
          inputProps={{
            name: 'facultyId'
          }}
          style={{ marginBottom: 10 }}
        >
           <option value={0}> </option>
         {this.state.participant.faculties.map((faculty)=>   
         <option value={faculty.facultyId}>{faculty.facultyName}</option> )}
        </NativeSelect>
             </FormControl>
              
        <FormControl 
        variant="outlined"
        fullWidth  >
        <InputLabel htmlFor="age-native-helper">Course Name</InputLabel>
        <NativeSelect
          value={this.state.participant.courseId}
          onChange={this.handleChange}
          inputProps={{
            name: 'courseId'
          }}
          style={{ marginBottom: 10 }}
        >
           <option value={0}> </option>
         {this.state.participant.courses.map((course)=>   
         <option value={course.courseId}>{course.courseName}</option> )}
        </NativeSelect>
             </FormControl>
              {/* {this.state.errors && (
                           <p className="text-danger font-monospace text-start">
                             {this.state.errors.mobile}
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