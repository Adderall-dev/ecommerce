import React from "react";
import { Btn, LiItem, ShopSmCard } from "../style";
import { addToCart } from "../redux/ducks/cartReducer";
import { useDispatch } from "react-redux";

const ShopItem = ({ product, cartToast }) => {
  const dispatch = useDispatch();
  return (
    <ShopSmCard key={product.id}>
      <img src={product.img} alt="" />
      <LiItem>{product.name}</LiItem>
      <LiItem>$ {product.price}</LiItem>
      <Btn
        onClick={() => {
          dispatch(addToCart(product));
          cartToast();
        }}
      >
        Add to cart
      </Btn>
    </ShopSmCard>
  );
};

export default ShopItem;
