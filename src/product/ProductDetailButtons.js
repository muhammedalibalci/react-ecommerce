import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";
import ArrowBack from "@material-ui/icons/ArrowBack";
export default class ProductDetailButtons extends Component {
  render() {
    return (
      <div>
        <Link to="/" style={{ color: "white" }}>
          <Button variant="contained" color="secondary">
            <ArrowBack />
            Back To Products
          </Button>
        </Link>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "3%" }}
          onClick={() =>
            this.props.addProductToCard(this.props.item)
          }
        >
          <Add />
          Add To Card
        </Button>
      </div>
    );
  }
}
