import { useId, useState } from "react";

function OrderPizza() {
    const pizzaNameId = useId();
    const [pizzaName, setPizzaName] = useState("pepperoni");

    const [pizzaSize, setPizzaSize] = useState("l");

    const [ingredients, setIngredients] = useState({
        meat: false,
        cheese: false,
        vegetarian: false,
    });

    const userIngredients = {
        meat: "Double Meat",
        cheese: "Double Cheese",
        vegetarian: "Vegetarian",
    };

    const handlePizzaName = (e) => {
        setPizzaName(e.target.value);
    };

    const handlePizzaSize = (e) => {
        setPizzaSize(e.target.value);
    };

    function handleIngredients(e) {
        setIngredients({ ...ingredients, [e.target.name]: e.target.checked });
    }

    function handleOrderPizza() {
        alert(
            "You ordered pizza: " +
                pizzaName +
                " Size:" +
                pizzaSize.toUpperCase() +
                " Ingredients: " +
                getIngredients(ingredients)
        );
    }

    function getIngredients(ingredientList) {
        const keys = Object.keys(ingredientList);
        const resultArr = [];
        for (const ingredient of keys) {
            if (ingredientList[ingredient])
                resultArr.push(userIngredients[ingredient]);
        }
        return resultArr.join(", ");
    }

    return (
        <>
            <div>
                <label htmlFor={pizzaNameId}>
                    Name of pizza
                    <select
                        id={pizzaNameId}
                        value={pizzaName}
                        onChange={handlePizzaName}
                    >
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
            <label>
                <input
                    type="checkbox"
                    name="meat"
                    checked={ingredients.meat}
                    onChange={handleIngredients}
                />
                {userIngredients.meat}
            </label>
            <label>
                <input
                    type="checkbox"
                    name="cheese"
                    checked={ingredients.cheese}
                    onChange={handleIngredients}
                />
                {userIngredients.cheese}
            </label>
            <label>
                <input
                    type="checkbox"
                    name="vegetarian"
                    checked={ingredients.vegetarian}
                    onChange={handleIngredients}
                />
                {userIngredients.vegetarian}
            </label>

            <button type="button" onClick={handleOrderPizza}>
                Order Pizza
            </button>
        </>
    );
}

export default OrderPizza;
