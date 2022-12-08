import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext, useState, Fragment } from "react";
import CartContaxt from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContaxt);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}€`;
  const hasItem = cartCtx.items.length > 0;
  const addCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  const orderHandler = () => {
    setIsCheckout(true);
  };
  const submitOrderHandler = (userData) => {
    setIsSubmitting(true);
    window.alert(
      JSON.stringify({
        user: userData,
        order: cartCtx.items,
        message: "this JSON will be sent to the server",
      })
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartContent = (
    <Fragment>
      {" "}
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCanel={props.onClose} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes["button-alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItem && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Fragment>
  );

  const isSubmittingContent = <p>Sending order data ... </p>;
  const didSubmitContent = <p> Successfully sent the order !</p>;
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartContent}
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
