import { useReducer } from "react";
import CartContaxt from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_CART") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addHandler = (item) => {
    dispatchCartAction({
      type: "ADD_CART",
      item: item,
    });
  };
  const removeHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_CART",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addHandler,
    removeItem: removeHandler,
  };

  return (
    <CartContaxt.Provider value={cartContext}>
      {props.children}
    </CartContaxt.Provider>
  );
};

export default CartProvider;
