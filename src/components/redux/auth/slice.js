import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./operation";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLogin: false,
};

const slice = createSlice({
  name: "auth",
  initialState,

  selectors: {
    selectUser: (state) => state.user,
    selectToken: (state) => state.token,
    selectIsLogin: (state) => state.isLogin,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state = initialState;
      });
  },
});

export const { selectIsLogin, selectToken, selectUser } = slice.selectors;
export const authSlice = slice.reducer;
