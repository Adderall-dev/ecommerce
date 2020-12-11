import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/ducks/cartReducer";
import { Btn, LiItem, ShopSmCard, FlexWrapper, Wrapper } from "../style";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartReducer.items);

  return (
    <Wrapper>
      <h1>SHOP</h1>
      <FlexWrapper>
        {products.map((product) => (
          <ShopSmCard key={product.id}>
            <LiItem>{product.name}</LiItem>
            <LiItem>$ {product.price}</LiItem>
            <Btn onClick={() => dispatch(addToCart(product))}>Add to cart</Btn>
          </ShopSmCard>
        ))}
      </FlexWrapper>
    </Wrapper>
  );
};

export default Shop;
