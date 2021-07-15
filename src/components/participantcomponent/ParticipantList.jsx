import React, { Component } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  IconButton,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Link } from "react-router-dom";
import ParticipantService from "../../services/ParticipantService";

class ParticipantList extends Component {
  state = {
   participants: [],
    search: "",
  };
  componentDidMount() {
    ParticipantService.getAllParticipants()
    .then((res) => {
        this.setState({participants: res.data});
    });
}

  onDelete = (participantId) => {
    console.log(participantId);
    ParticipantService.deleteParticipant(participantId).then((res) => {
        this.setState({participants: this.state.participants.filter( participant => participant.participantId !== participantId)});
    });
}
  handleSearch = (event) => {
    console.log("handleSearch");
    const participants = [...this.state.participants];
    this.setState({ search: event.target.value });
    const filteredParticipants = participants.filter((participant) =>
      participant.participantName.includes(this.state.search)
    );
    this.setState({participants: filteredParticipants });
  };
  render() {
    return (
      <Container>
        <TableContainer
          component={Paper}
          elevation={3}
          style={{ padding: "20px", marginTop: "80px" }}
        >
          <Box style={{ display: "flex", justifyContent: "flex-end" }}>
            <TextField
              id="search"
              variant="filled"
              label="Search By Name"
              type="search"
              value={this.state.search}
              onChange={this.handleSearch}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
              component={Link}
              to={"/addparticipant"}
            >
              Add
            </Button>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Participant Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone No</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.participants.map((participant) => (
                <TableRow key={participant.participantId}>
                  <TableCell>{participant.participantId}</TableCell>
                  <TableCell>{participant.participantName}</TableCell>
                  <TableCell>{participant.email}</TableCell>
                  <TableCell>{participant.mobile}</TableCell>
                  <TableCell>
                    <IconButton component={Link} to={`/updateparticipant/${participant.participantId}`}>
                      <EditOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => this.onDelete(participant.participantId)}>
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}

export default ParticipantList;