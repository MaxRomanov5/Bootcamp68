import { useId, useState } from "react";

function OrderPizza() {
  const pizzaNameId = useId();
  const [pizzaName, setPizzaName] = useState("pepperoni");

  const [pizzaSize, setPizzaSize] = useState("l");

  const handlePizzaName = (e) => {
    setPizzaName(e.target.value);
  };

  const handlePizzaSize = (e) => {
    setPizzaSize(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor={pizzaNameId}>
          Name of pizza
          <select id={pizzaNameId} value={pizzaName} onChange={handlePizzaName}>
            <option value="margarita">margarita</option>
            <option value="pepperoni">pepperoni</option>
            <option value="4_cheese">4 cheese</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="pizzaSize"
            value="s"
            onChange={handlePizzaSize}
            checked={pizzaSize === "s"}
          ></input>
          S
        </label>
        <label>
          <input
            type="radio"
            name="pizzaSize"
            value="m"
            onChange={handlePizzaSize}
            checked={pizzaSize === "m"}
          ></input>
          M
        </label>
        <label>
          <input
            type="radio"
            name="pizzaSize"
            value="l"
            onChange={handlePizzaSize}
            checked={pizzaSize === "l"}
          ></input>
          L
        </label>
      </div>
    </>
  );
}

export default OrderPizza;
