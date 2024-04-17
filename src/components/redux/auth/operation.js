import { authApi, setToken, removeToken } from "../../../authApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkApi) => {
    try {
      const response = authApi.post("/users/signup", data);
      setToken(response.data.token);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (data, thunkApi) => {
  try {
    const response = authApi.post("/users/login", data);
    setToken(response.data.token);

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const response = authApi.post("/users/logout");
    removeToken();

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
