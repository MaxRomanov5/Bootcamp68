import { createSlice } from '@reduxjs/toolkit';

export const slicePizza = createSlice({
  initialState: {
    pizza: [],
  },
  name: 'pizza',
  reducers: {
    addPizza(state, { payload }) {
      state.pizza.push(payload);
    },
  },
  selectors: {
    getPizza: (state) => state.pizza,
  },
});

export const pizzaRuducer = slicePizza.reducer;
export const { addPizza } = slicePizza.actions;
export const { getPizza } = slicePizza.selectors;
