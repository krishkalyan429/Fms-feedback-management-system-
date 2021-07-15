import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// const StyledBadge = withStyles((theme) => ({
//   badge: {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: "0 4px",
//   },
// }))(Badge);
const Nav = () => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Box borderRadius={16} border={1} p={1}>
          <Typography variant="h6">FMS</Typography>
        </Box>
        <Button color="inherit" component={NavLink} to="/home">
          Home
        </Button>
        <Button color="inherit" component={NavLink} to="/participantlist">
         Participant
        </Button>
        <Button color="inherit" component={NavLink} to="/facultylist">
          Faculty
        </Button>
        <Button color="inherit" component={NavLink} to={"/course"}>
            Course
          </Button>
          <Button color="inherit" component={NavLink} to={"/participantfeedbacklist"}>
            Feedback
          </Button>
        <Button color="inherit" component={NavLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={NavLink} to="/contact">
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Nav;