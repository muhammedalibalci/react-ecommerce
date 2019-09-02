import React, { Component } from "react";
import { Table, Container, Col, Row } from "reactstrap";
import CardDetailPay from "./CardDetailPay";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
export default class CardDetail extends Component {
  cardDetail() {
    return (
      <Container style={{ paddingBottom: "10%" }}>
        <hr />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.props.refreshCard()}
        >
          <Delete />
          Clear Table
        </Button>
        <br />
        <br />

        <Table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Name Of Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.props.card.map(item => (
              <tr>
                <th>
                  <img
                    alt=""
                    height="50"
                    width="50"
                    src="http://cdn.shopify.com/s/files/1/1043/3082/products/iPhone8plus_line-up_product_image_1200x630.jpg?v=1542101299"
                  />
                </th>
                <td>{item.name}</td>
                <td>{item.wage} ₺</td>
                <td>{item.quantity}</td>
                <td>
                  <Delete
                    onClick={() => this.props.removeProductToCard(item)}
                    style={{ color: "#F54585", marginLeft: "13%" }}
                  />
                </td>
                <td>{item.quantity * item.wage} ₺</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Row>
          <Col xs={8}></Col>
          <Col xs={4}>
            <CardDetailPay card={this.props.card} wage={this.props.wage} />
          </Col>
        </Row>
      </Container>
    );
  }
  emptyDetail() {
    return (
      <div>
        <Container>
          <hr />
          <div className="emptydetail">
            <h5>Empty Card</h5>0 items
            <ShoppingCart color="inherit" />
          </div>
        </Container>
      </div>
    );
  }

  render() {
    return (
      <div>
        
        <h2 className="productTitle">Your Basket<div><ShoppingCart color="inherit" /></div></h2>

        {this.props.card.length > 0 ? this.cardDetail() : this.emptyDetail()}
      </div>
    );
  }
}
