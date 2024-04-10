export const addPizza = (pizza) => {
  return {
    type: "PIZZA/ADD_PIZZA",
    payload: {
      ...pizza,
    },
  };
};
