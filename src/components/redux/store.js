import { configureStore } from "@reduxjs/toolkit";
import { goodsReducer } from "./gallerySlice";
import { authSlice } from "./auth/slice";

export const store = configureStore({
  reducer: {
    goods: goodsReducer,
    auth: authSlice,
  },
});
