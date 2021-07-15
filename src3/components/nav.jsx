import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Box mr={3}>
            <Typography variant="h6">ReduxDemo</Typography>
          </Box>
          <Button color="inherit" component={Link} to={"/products"}>
            Products
          </Button>
          {!this.props.account.loggedIn && <Button color="inherit" style={{ marginLeft: "auto" }} component={Link} to={"/login"}>
            Login
          </Button>}
          {this.props.account.loggedIn && <Button color="inherit" style={{ marginLeft: "auto" }} component={Link} to={"/logout"}>
            Logout
          </Button>}
          <Button color="inherit" style={{ marginLeft: "10px" }} component={Link} to={"/register"}>
            Register
          </Button>
          <IconButton color="inherit" aria-label="add to shopping cart">
            <Badge color="secondary" badgeContent="0 ">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  //  const { fakestore } = state;
  return {
    account: state.account,
  };
};

// //function to dispatch actions
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getProductAction,
//   };
// };
export default connect(mapStateToProps)(Nav);
