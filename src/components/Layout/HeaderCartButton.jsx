import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import CartContaxt from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const cartCtx = useContext(CartContaxt);
  const { items } = cartCtx;
  const numberCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${btnAnimation ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimation(true);
    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);
    // clean up function
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
