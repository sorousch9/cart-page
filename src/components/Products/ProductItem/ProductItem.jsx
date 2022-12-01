import { useContext } from "react";
import CartContaxt from "../../../store/cart-context";

import classes from "./ProductItem.module.css";
import ProductItemForm from "./ProductItemForm";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContaxt)
  const price = `${props.price.toFixed(2)}€`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id : props.id,
      name : props.name,
      amount: amount,
      price: props.price
    })

  };
  return (
    <li className={classes.product}>
      <div className={classes.wrapper}>
        <div className={classes.image}>
          <img src={props.img} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>

      <div className={classes.form}>
        <ProductItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ProductItem;
