import React, { Component } from "react";
import {
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { getProductsAction } from "../actions/productAction";
import { connect } from "react-redux";
import ProductCard from "./product-card";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        "All",
        "Men's Clothing",
        "Women's Clothing",
        "Electronics",
        "Jewelery",
      ],
    };
  }
  // useEffect(()=>{},[]) - functional components
  componentDidMount() {
    this.props.getProductsAction();
  }
  render() {
    return (
      <Grid container spacing={1}>
        <Grid item md={3}>
          <Paper elevation={3}>
            <List
              component="nav"
              disablePadding
              aria-label="secondary mailbox folders"
            >
              {this.state.categories.map((category) => (
                <div>
                  <ListItem button key={category}>
                    <ListItemText primary={category} />
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item md={9}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Grid container spacing={5}>
              {this.props.products.map((product) => (
                <Grid item md={4} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  //  const { fakestore } = state;
  return {
    products: state.fakestore.products,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    getProductsAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Products); // connect component to store
