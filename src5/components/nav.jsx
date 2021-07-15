import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);
const Nav = () => {
  return (
    <AppBar color="secondary">
      <Toolbar>
        <Box borderRadius={16} border={1} p={1}>
          <Typography variant="h6">MyApp</Typography>
        </Box>
        <Button color="inherit" component={NavLink} to="/home">
          Home
        </Button>
        <Button color="inherit" component={NavLink} to="/users">
          Users
        </Button>
        <Button color="inherit" component={NavLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={NavLink} to="/contact">
          Contact Us
        </Button>
        <Button
          color="inherit"
          style={{ marginLeft: "auto" }}
          component={NavLink}
          to="/login"
        >
          Login
        </Button>
        <Button color="inherit" component={NavLink} to="/register">
          Register
        </Button>
        <IconButton aria-label="cart" component={NavLink} to="/cart">
          <StyledBadge badgeContent={5} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
