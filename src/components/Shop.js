import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/ducks/cart";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);

  return (
    <div>
      <h1>SHOP</h1>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            <li>{product.name}</li>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to cart
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
