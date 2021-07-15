import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { product } = this.props;
    return (
      <Card
        component={Link}
        to={`/product/details/${product.id}`}
        style={{ textDecoration: "none" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={product.image}
          />
          <CardContent>
            <Typography align="left" variant="body2">
              {product.title}
            </Typography>
            <Typography align="right">${product.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default ProductCard;
