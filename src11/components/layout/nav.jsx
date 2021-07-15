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


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AppBar color="transparent">
        <Toolbar>


          <Box mr={8}>
            <Typography variant="h6">FMS</Typography>
          </Box>
          <Button color="secondary" component={Link} to={"/home"}>
            Home
          </Button>

          <Button color="secondary" component={Link} to={"/course"}>
            course
          </Button>

          <Button color="secondary" component={Link} to={"/about"}>
            About
          </Button>

          <Button color="secondary" component={Link} to={"/contactus"}>
            Contact us
          </Button>


          <Button color="variant" style={{ marginLeft: "auto" }} component={Link} to={"/sidebar"}>
            Sidebar
          </Button>

        </Toolbar>
      </AppBar>
    );
  }
}





const mapStateToProps = (state) => {
  
  return {
    account: state.account,
  };
};

export default connect(mapStateToProps)(Nav);