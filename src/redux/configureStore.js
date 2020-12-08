import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cart from "./ducks/cart";

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const reducer = combineReducers({
  cart,
});

const store = createStore(reducer, persistedState, composeWithDevTools());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
