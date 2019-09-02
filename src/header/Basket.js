import React, { Component } from "react";
import "../assets/basket.css";
import { Container, Row, Col, Badge } from "reactstrap";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import CreditCard from "@material-ui/icons/CreditCard";
import { Link } from "react-router-dom";
export default class Basket extends Component {
  renderSummary() {
    return (
      <Container>
        <h5 className="baskettext">Your Basket</h5>
        <hr />
        {this.props.card.map(item => (
          <Row key={item.product_id}>
            <Col xs={3}>
              <img
                alt=""
                height="50"
                width="50"
                src="http://cdn.shopify.com/s/files/1/1043/3082/products/iPhone8plus_line-up_product_image_1200x630.jpg?v=1542101299"
              />
            </Col>
            <Col xs={6}>
              <div>{item.name}</div>
              <p>{item.wage}₺</p>
            </Col>
            <Col xs={3}>
              <Badge
                color="danger"
                onClick={() => this.props.removeProductToCard(item)}
                pill
              >
                X
              </Badge>
              <br />
              <Badge color="success" pill>
                {item.quantity}
              </Badge>
            </Col>
          </Row>
        ))}

        <div className="detail">
          <hr />
          <CreditCard style={{ marginBottom: "1%" }} />
          <Link to="/card">Checkout</Link>
        </div>
      </Container>
    );
  }
  renderEmpty() {
    return (
      <div>
        <h5 className="baskettext">Your Basket</h5>
        <hr />
        <div className="emptycard">
          <h5>Empty Card</h5>0 items
          <ShoppingCart color="inherit" />
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="backB">
        {this.props.card.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}
