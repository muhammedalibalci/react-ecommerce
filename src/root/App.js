import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/Shop";
import Header from "../header/Header";
import "../assets/index.css";
import ProductList from "../product/ProductList";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import NotFound from "../notfound/NotFound";
import CardDetail from "../card/CardDetail";
import ProductDetail from "../product/ProductDetail";

const API_URL = "http://localhost:8080/";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      card: [],
      wage: 0,
      quantity: 0
    };
  }
  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = () => {
    fetch(API_URL + "products")
      .then(response => response.json())
      .then(result =>
        this.setState({
          products: result
        })
      );
  };
  addProductToCard = product => {
    let newCard = this.state.card;
    var addedItem = newCard.find(c => c.product_id === product.product_id);

    if (addedItem) {
      addedItem.quantity += 1;
      this.setState(state => ({
        card: newCard,
        wage: state.wage + parseInt(product.wage),
        quantity: state.quantity + 1
      }));
    } else {
      newCard.push(product);
      product.quantity = 1;
      this.setState(state => ({
        card: newCard,
        wage: state.wage + parseInt(product.wage),
        quantity: state.quantity + 1
      }));
    }
  };
  removeProductToCard = product => {
    let currentCard = this.state.card;
    let newCard = currentCard.filter(x => x.product_id !== product.product_id);
    this.setState(state => ({
      card: newCard,
      wage: state.wage - parseInt(product.wage * product.quantity),
      quantity: state.quantity - product.quantity
    }));
  };
  refreshCard = () => {
    this.setState({
      card: []
    });
  };

  searchByProducts = word => {
    fetch(API_URL + "search?word=" + word)
      .then(response => response.json())
      .then(result =>
        this.setState({
          products: result
        })
      );
  };
  render() {
    return (
      <div>
        <Grid item md={12} container>
          <Header
            wage={this.state.wage}
            quantity={this.state.quantity}
            card={this.state.card}
            removeProductToCard={this.removeProductToCard}
            searchByProducts={this.searchByProducts}
          />
        </Grid>

        <div className="back">
          <Switch>
            <Route path="/" exact>
              <h2 className="productTitle">
                <div>
                  <ShoppingCart />
                </div>
                Our Products
              </h2>
              <hr />
              <Container>
                <ProductList
                  addProductToCard={this.addProductToCard}
                  products={this.state.products}
                />
              </Container>
            </Route>
            <Route path="/card">
              <CardDetail
                wage={this.state.wage}
                quantity={this.state.quantity}
                card={this.state.card}
                removeProductToCard={this.removeProductToCard}
                refreshCard={this.refreshCard}
              />
            </Route>
            <Route
              path="/product/:id"
              render={props => (
                <ProductDetail
                  {...props}
                  addProductToCard={this.addProductToCard}
                />
              )}
            />

            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}
