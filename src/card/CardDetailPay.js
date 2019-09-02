import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CreditCard from "@material-ui/icons/CreditCard";
export default class CardDetailPay extends Component {
  render() {
    return (
      <div>
        <br />
        <hr />
        <h5>Total :{this.props.wage} ₺</h5>
        <br />
        <Button variant="contained" color="primary">
          <CreditCard />
          <a href="https://www.paypal.com/us/home" style={{color:'white'}}>Checkout</a>
        </Button>
      </div>
    );
  }
}
