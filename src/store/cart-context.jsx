import React from "react";

const CartContaxt = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart:()=>{},
});
export default CartContaxt;