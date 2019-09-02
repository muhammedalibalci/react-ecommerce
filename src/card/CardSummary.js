import React from "react";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Basket from "../header/Basket";

export default function CardSummary(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <div style={{ marginLeft: "3%"}}>
      <ShoppingCart onClick={handleMenu} color="inherit">
        <AccountCircle />
      </ShoppingCart>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        style={{}}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
          
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        onClose={handleClose}
      >
        
        <Basket card={props.card} removeProductToCard={props.removeProductToCard} />

      </Menu>
    </div>
  );
}
