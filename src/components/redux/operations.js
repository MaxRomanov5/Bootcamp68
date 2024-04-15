import { createAsyncThunk } from "@reduxjs/toolkit";
import { getGoods, getSingleProduct } from "../../api";

export const fetchGoods = createAsyncThunk(
    "gallery/getGoods",
    async (_, asyncAPI) => {
        try {
            const data = await getGoods();
            return data.data;
        } catch (error) {
            return asyncAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchSingleGood = createAsyncThunk(
    "gallery/getSingleGood",
    async (id, asyncAPI) => {
        try {
            const data = await getSingleProduct(id);
            return data;
        } catch (error) {
            return asyncAPI.rejectWithValue(error.message);
        }
    }
);
