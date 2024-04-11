import { createSlice } from "@reduxjs/toolkit";

export const slicePizza = createSlice({
  initialState: {
    pizza: [],
  },
  name: "pizza",
  reducers: {
    addPizza(state, { payload }) {
      state.pizza.push(payload);
    },
    removePizza(state, { payload }) {
      const index = state.pizza.findIndex((pizza) => {
        return pizza.id === payload;
      });
      state.pizza.splice(index, 1);
    },
  },
  selectors: {
    getPizza: (state) => state.pizza,
  },
});

export const pizzaRuducer = slicePizza.reducer;
export const { addPizza } = slicePizza.actions;
export const { removePizza } = slicePizza.actions;
export const { getPizza } = slicePizza.selectors;
