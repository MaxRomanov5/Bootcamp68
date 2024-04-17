import { createSlice } from "@reduxjs/toolkit";
import { fetchGoods, fetchSingleGood } from "./operations";

const initialState = {
    goods: [],
    error: "",
    loading: false,
};

const gallerySlice = createSlice({
    name: "goods",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchGoods.fulfilled, (state, { payload }) => {
                state.goods = payload;
                state.error = "";
                state.loading = false;
            })
            .addCase(fetchGoods.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGoods.rejected, (state, { payload }) => {
                state.error = payload;
                state.loading = false;
            });
    },
});

export const goodsReducer = gallerySlice.reducer;