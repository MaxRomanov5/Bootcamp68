import { useId, useState } from "react";

function OrderPizza() {
  const pizzaNameId = useId();
  const [pizzaName, setPizzaName] = useState("pepperoni");

  const handlePizzaName = (e) => {
    setPizzaName(e.target.value);
  };

  return (
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
  );
}

export default OrderPizza;
