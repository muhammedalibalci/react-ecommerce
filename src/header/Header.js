import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Link} from 'react-router-dom'
import Typography from "@material-ui/core/Typography";

import { fade, makeStyles } from "@material-ui/core/styles";
import Shop from "@material-ui/icons/Shop";

import Fab from "@material-ui/core/Fab";

import NavigationIcon from "@material-ui/icons/Navigation";
import CardSummary from "../card/CardSummary";
import MenuSearch from "./MenuSearch";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  margin: {
    margin: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
    display: "none"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },

    width: "50%"
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7)
  }
}));

export default function SearchAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Shop />

          <Typography
            style={{
              marginRight: "5%",
              marginLeft: "1%",
              fontFamily: "Roboto-Regular-Italic"
            }}
            variant="h6"
            noWrap
          >
           <Link to="/" style={{color:'white'}}> Shop App</Link>
          </Typography>

          {/* Menu-Search */}
          <MenuSearch searchByProducts={props.searchByProducts} />

          <div style={{ marginRight: "10%" }}>
          <Link to="/" style={{color:'white'}}>            <Fab
              variant="extended"
              color="secondary"
              aria-label="add"
              className={classes.margin}
              style={{ height: "2.5rem", marginRight: "100%" }}
            >
              <NavigationIcon className={classes.extendedIcon} />
              Products
            </Fab>
            </Link>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <span>TL:{props.wage}₺ </span>
            <div style={{ border: "1px solid" }}></div>
            <div>{props.quantity} items</div>
          </div>
          {/* CardSummary*/}
          <CardSummary card={props.card} removeProductToCard={props.removeProductToCard} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
