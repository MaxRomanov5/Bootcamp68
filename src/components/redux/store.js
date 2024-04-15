import { configureStore } from "@reduxjs/toolkit";
import { goodsReducer } from "./gallerySlice";

export const store = configureStore({
    reducer: {
        goods: goodsReducer,
    },
});
