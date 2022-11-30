import classes from "./Cart.module.css";
import React from "react";

const Cart = (props) => {
  return <div className={classes.cart}>{props.children}</div>;
};

export default Cart;
