export const addPizza = (pizza) => {
  return {
    type: "PIZZA/ADD_PIZZA",
    payload: {
      ...pizza,
    },
  };
};
export const removePizza = (id) => {
  return {
    type: "PIZZA/REMOVE_PIZZA",
    payload: id,
  };
};
