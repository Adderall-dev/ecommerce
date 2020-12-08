import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  const cartItems = useSelector((state) =>
    state.cart.cart.map((item) => item.qty)
  );
  const cartItemsLength = cartItems.reduce((a, b) => a + b, 0);
  return (
    <Router>
      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/cart">
            <li>Cart ({cartItemsLength})</li>
          </Link>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
