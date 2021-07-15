import React, { Component } from "react";
import { Grid, Container, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { getProductAction } from "../actions/productAction";
import { Typography } from "@material-ui/core";
import red from "@material-ui/core/colors/red";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnred: red[400],
    };
  }
  componentDidMount() {
    this.props.getProductAction(this.props.match.params.id);
  }
  render() {
    console.log(this.props.product);
    //this.props.match.params.id;
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item md={5}>
            <img
              src={this.props.product.image}
              alt="productImage"
              width="300"
              height="300"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                variant="outlined"
                style={{ color: red[400], marginRight: "10px" }}
              >
                Add to cart
              </Button>
              <Button variant="contained" color="primary">
                Buy now
              </Button>
            </div>
          </Grid>
          <Grid item md={7} align="left">
            <Typography variant="h6">{this.props.product.title}</Typography>
            <Typography gutterBottom>${this.props.product.price}</Typography>
            <Typography variant="body2">
              <b>Discription: </b>
              {this.props.product.description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
}


// funtion to get updates from store
const mapStateToProps = (state) => {
  //  const { fakestore } = state;
  return {
    product: state.fakestore.product,
  };
};

//function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    getProductAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ProductDetails);
