import { useState } from "react";
import "./App.css";
import OrderPizza from "./components/OrderPizza/OrderPizza.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import VisiblePizza from "./components/VisiblePizza/VisiblePizza.jsx";

function App() {
  const [orderedPizza, setOrderedPizza] = useState([]);

  function addPizza(newPizza) {
    setOrderedPizza((prev) => {
      return [...prev, newPizza];
    });
  }

  return (
    <>
      {/* <Sidebar /> */}
      <OrderPizza addPizza={addPizza} />
      <VisiblePizza pizzaList={orderedPizza} />
    </>
  );
}

export default App;
