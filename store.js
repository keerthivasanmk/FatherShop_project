import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
// import rootReducer from "./reducer";

// initial states here
const initalState = {
  isLoggedIn: false,
};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  //   rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
