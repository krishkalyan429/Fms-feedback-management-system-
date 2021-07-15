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
import axios from "axios";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Link } from "react-router-dom";

class Users extends Component {
  state = {
    users: [],
    search: "",
  };
  componentDidMount() {
    axios.get("http://localhost:8082/users").then((res) => {
      this.setState({ users: res.data });
    });
  }

  onDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8082/users/${id}`).then((res) => {
      const users = this.state.users.filter((user) => user.id !== id);
      this.setState({ users: users });
    });
  };
  handleSearch = (event) => {
    console.log("handleSearch");
    const users = [...this.state.users];
    this.setState({ search: event.target.value });
    const filteredUsers = users.filter((user) =>
      user.userName.includes(this.state.search)
    );
    this.setState({ users: filteredUsers });
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
              to={"/user/add"}
            >
              Add
            </Button>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone No</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.userName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.mobileNo}</TableCell>
                  <TableCell>
                    <IconButton component={Link} to={`/user/update/${user.id}`}>
                      <EditOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => this.onDelete(user.id)}>
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

export default Users;
