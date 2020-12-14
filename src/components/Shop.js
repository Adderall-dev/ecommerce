import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FlexWrapper, ShopWrapper } from "../style";
import ShopItem from "./ShopItem";

toast.configure();
const Shop = () => {
  const products = useSelector((state) => state.cartReducer.items);
  const cartToast = () => {
    toast.success("item added to cart", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  };
  return (
    <ShopWrapper>
      <ToastContainer transition={Slide} />
      <FlexWrapper>
        {products.map((product) => (
          <ShopItem key={product.id} product={product} cartToast={cartToast} />
        ))}
      </FlexWrapper>
    </ShopWrapper>
  );
};

export default Shop;
