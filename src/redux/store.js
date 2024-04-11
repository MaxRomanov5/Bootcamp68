// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { devToolsEnhancer } from "@redux-devtools/extension";

// const enhancer = devToolsEnhancer();

// const store = createStore(rootReducer, enhancer);

// export default store;

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { configureStore } from "@reduxjs/toolkit";
import { pizzaRuducer } from "./slicePizza";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, pizzaRuducer);

export const store = configureStore({ reducer: { pizza: persistedReducer } });

export let persistor = persistStore(store);
