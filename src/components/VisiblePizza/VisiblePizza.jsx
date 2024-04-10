import { useDispatch } from "react-redux";
import { removePizza } from "../../redux/action";

const VisiblePizza = ({ pizzaList }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {pizzaList.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.pizzaName}</p>
            <p>{item.pizzaSize}</p>
            {item.bonusIngredients.length > 0 && (
              <ul>
                {item.bonusIngredients.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            )}
            <button
              onClick={() => {
                dispatch(removePizza(item.id));
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default VisiblePizza;
