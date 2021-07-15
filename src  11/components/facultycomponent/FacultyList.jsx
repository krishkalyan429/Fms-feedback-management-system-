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
import FacultyService from "../../services/FacultyService";

class FacultyList extends Component {
  state = {
    faculties: [],
    search: "",
  };
  componentDidMount() {
    FacultyService.getAllfaculties()
    .then((res) => {
        this.setState({faculties: res.data});
    });
}
 
  onDelete = (facultyId) => {
    console.log(facultyId);
    FacultyService.deleteFaculty(facultyId).then((res) => {
        this.setState({faculties: this.state.faculties.filter( faculty => faculty.facultyId !== facultyId)});
    });
}
  handleSearch = (event) => {
    console.log("handleSearch");
    const faculties = [...this.state.faculties];
    this.setState({ search: event.target.value });
    const filteredFaculties = faculties.filter((faculty) =>
      faculty.facultyName.includes(this.state.search)
    );
    this.setState({ faculties: filteredFaculties });
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
              to={"/addfaculty"}
            >
              Add
            </Button>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>FacultyId</TableCell>
                <TableCell>FacultyName</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.faculties.map((faculty) => (
                <TableRow key={faculty.facultyId}>
                  <TableCell>{faculty.facultyId}</TableCell>
                  <TableCell>{faculty.facultyName}</TableCell>
                  <TableCell>{faculty.mobile}</TableCell>
                  <TableCell>{faculty.email}</TableCell>
                  <TableCell>
                    <IconButton component={Link} to={`/updatefaculty/${faculty.facultyId}`}>
                      <EditOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => this.onDelete(faculty.facultyId)}>
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

export default FacultyList;