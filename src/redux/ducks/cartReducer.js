import shopItems from "../../ShopItems";

const INIT_STATE = "cart/initState";
const ADD_TO_CART = "cart/addToCart";
const DELETE_CART_ITEM = "cart/deleteCartItem";
const CHECKOUT = "cart/checkout";
const HANDLE_PAY = "cart/handlePay";

const initialState = {
  items: shopItems,
  cart: [],
  checkout: {},
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
    case CHECKOUT:
      return {
        ...state,
        checkout: { cart: [...state.cart], total: payload },
        cart: [],
      };
    case DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    case INIT_STATE:
      return initialState;
    default:
      return state;
  }
};

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const checkout = (total) => ({
  type: CHECKOUT,
  payload: total,
});

export const handlePay = () => ({
  type: HANDLE_PAY,
});

export const deleteCartItem = (id) => ({
  type: DELETE_CART_ITEM,
  payload: id,
});

export const initState = () => ({
  type: INIT_STATE,
});

export default cartReducer;
