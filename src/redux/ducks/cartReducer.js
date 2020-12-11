import shopItems from "../../ShopItems";

const CLEAR_CART = "cart/clearCart";
const ADD_TO_CART = "cart/addToCart";
const DELETE_CART_ITEM = "cart/deleteCartItem";

const initialState = {
  items: shopItems,
  cart: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      //save matching item to variable
      const item = state.items.find((prod) => prod.id === payload.id);
      //check if item is already in cart
      const isInCart = state.cart.find((cartItem) =>
        cartItem.id === payload.id ? true : false
      );
      return {
        ...state,
        cart: isInCart
          ? //if item is in cart
            state.cart.map((item) =>
              //item is equal to payload
              item.id === payload.id
                ? //increase qty of item and increase item price
                  {
                    ...item,
                    qty: item.qty + 1,
                    price:
                      item.qty < 2
                        ? item.price * 2
                        : item.price / item.qty + item.price,
                  }
                : item
            )
          : //if items is not in cart
            [...state.cart, { ...item, qty: 1 }],
      };
    case DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const deleteCartItem = (id) => ({
  type: DELETE_CART_ITEM,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export default cartReducer;
