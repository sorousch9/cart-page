import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartIcon from "./CartIcon";
import CartContaxt from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContaxt);
  const numberCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
