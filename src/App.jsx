import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCarthandler = () => {
    setCartIsShown(true);
  };
  const hideCarthandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCarthandler} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Products />
      </main>
    </Fragment>
  );
}

export default App;
