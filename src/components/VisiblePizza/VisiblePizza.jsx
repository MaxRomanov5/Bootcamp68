const VisiblePizza = ({ pizzaList }) => {
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
          </li>
        );
      })}
    </div>
  );
};

export default VisiblePizza;
