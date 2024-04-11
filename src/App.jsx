import { useState } from "react";
import "./App.css";
import OrderPizza from "./components/OrderPizza/OrderPizza.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import VisiblePizza from "./components/VisiblePizza/VisiblePizza.jsx";
import { useSelector } from "react-redux";
import { getPizza } from "./redux/slicePizza.js";

function App() {
  const pizzas = useSelector(getPizza);
  console.log(pizzas);

  return (
    <>
      {/* <Sidebar /> */}
      <OrderPizza />
      {pizzas?.length > 0 && <VisiblePizza pizzaList={pizzas} />}
    </>
  );
}

export default App;
