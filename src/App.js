import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/layout/Header";
import Meals from './components/Meals/Meals'
import CartProvider from "./store/CartProvider";

function App() {

  const [isCartActive, setIsCartActive] = useState(false);

  const showCartHandler = () => {
    setIsCartActive(true)
  }

  const hideCartHandler = () => {
    setIsCartActive(false)
  }

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <Meals />
      {isCartActive && <Cart onHideCart={hideCartHandler} />}
    </CartProvider>

  );
}

export default App;
