import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/ducks/cartReducer";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Btn, LiItem, ShopSmCard, FlexWrapper, Wrapper } from "../style";

toast.configure();
const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartReducer.items);
  const cartToast = () => {
    toast.success("item added to cart", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  };
  return (
    <Wrapper>
      <ToastContainer transition={Slide} />
      <h1>SHOP</h1>
      <FlexWrapper>
        {products.map((product) => (
          <ShopSmCard key={product.id}>
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
        ))}
      </FlexWrapper>
    </Wrapper>
  );
};

export default Shop;
