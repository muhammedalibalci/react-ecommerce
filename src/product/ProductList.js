import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Rating from "material-ui-rating";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default class MediaCard extends Component {
  render() {
    return (
      <div className="productlist">
        <Row>
          {this.props.products.map(item => (
            <Col md={3} key={item.product_id}>
              <Card className="card">
                <CardActionArea>
                  <Link
                    to={{
                      pathname: "/product/" + item.product_id,
                      state: {
                        item
                      }
                    }}
                  >
                    <img
                      alt=""
                      src={item.weight}
                      className="media"
                      height="170"
                      width="120"
                    />
                  </Link>
                  <CardContent>
                    <Row>
                      <Col xs={8}>
                        <span className="mediatext">{item.name}</span>
                      </Col>{" "}
                      <span className="mediatext">{item.wage} ₺</span>
                    </Row>
                  </CardContent>
                </CardActionArea>
                <div style={{textAlign:'center'}}>
                  <Rating
                    value={3.5}
                    max={5}
                    onChange={value => console.log(`Rated with value ${value}`)}
                  />
                </div>
                <CardActions>
                  <div className="addButton ">
                    <Fab
                      color="primary"
                      onClick={() => this.props.addProductToCard(item)}
                      aria-label="add"
                    >
                      <AddIcon />
                    </Fab>
                  </div>
                </CardActions>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
