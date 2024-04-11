import { combineReducers } from "redux";

const initialState = [];

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PIZZA/ADD_PIZZA":
      return [...state, action.payload];
    case "PIZZA/REMOVE_PIZZA":
      return state.filter((pizza) => pizza.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  pizzas: pizzaReducer,
});
export default rootReducer;