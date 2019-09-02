import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import ProductDetailText from "./ProductDetailText";
import ProductDetailButtons from "./ProductDetailButtons";
export default class ProductDetail extends Component {
  render() {
    return (
      <div>
        <h2 className="productTitle">
          <div>Product Detail</div>
        </h2>
        <hr />
        <br />
        <br />
        <Container>
          <Row>

            {/* Image */}
            <Col xs={5}>
              <img
                alt=""
                height="350"
                width="250"
                src={this.props.location.state.item.weight}
              />
            </Col>

            {/* Content */}
            <Col xs={7}>
              
                <ProductDetailText item={this.props.location.state.item} />
                <ProductDetailButtons
                  item={this.props.location.state.item}
                  addProductToCard={this.props.addProductToCard}
                />
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
