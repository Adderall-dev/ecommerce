const CLEAR_CART = "cart/clearCart";
const ADD_TO_CART = "cart/addToCart";
const DELETE_CART_ITEM = "cart/deleteCartItem";

const initialState = {
  items: [
    {
      id: 1,
      name: "cake",
      qty: 1,
    },
    {
      id: 2,
      name: "cookie",
      qty: 1,
    },
    {
      id: 3,
      name: "toast",
      qty: 1,
    },
  ],
  cart: [],
  amount: 0,
};

const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const item = state.items.find((prod) => prod.id === payload.id);
      const isInCart = state.cart.find((cartItem) =>
        cartItem.id === payload.id ? true : false
      );
      return {
        ...state,
        cart: isInCart
          ? state.cart.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
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

export default cart;
