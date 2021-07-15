import React, { Component } from "react";
import { Container, IconButton } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <IconButton
          onClick={() => this.props.handleDecrement(this.props.product.id)}
          aria-label="decrement"
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
        {this.props.product.quantity}
        <IconButton
          onClick={() => this.props.handleIncrement(this.props.product.id)}
          aria-label="increment"
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </Container>
    );
  }
}

export default Counter;
