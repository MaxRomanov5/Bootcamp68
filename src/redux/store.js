// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { devToolsEnhancer } from "@redux-devtools/extension";

// const enhancer = devToolsEnhancer();

// const store = createStore(rootReducer, enhancer);

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { pizzaRuducer } from './slicePizza';

export const store = configureStore({ reducer: { pizza: pizzaRuducer } });
