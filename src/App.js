import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import PageNotFound from "./components/PageNotFound";
import { GlobalStyle } from "./GlobalStyle";
import { NavBar, MainApp, NavCart } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import Checkout from "./components/Checkout";
import FinishCheckout from "./components/FinishCheckout";

const App = () => {
  const cartItems = useSelector((state) =>
    state.cartReducer.cart.map((item) => item.qty)
  );
  const cartItemsLength = cartItems.reduce((a, b) => a + b, 0);
  return (
    <Router>
      <GlobalStyle />
      <NavBar>
        <h1>
          Food<span>.now</span>
        </h1>
        <h2>
          F<span>.N</span>
        </h2>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <NavCart>
            <FaShoppingCart />
            {cartItemsLength === 0 ? null : <div>{cartItemsLength}</div>}
          </NavCart>
        </Link>
      </NavBar>
      <MainApp>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/pay" component={FinishCheckout} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </MainApp>
    </Router>
  );
};

export default App;
