import { useId, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const scheme = yup.object().shape({
  pizzaName: yup
    .string()
    .oneOf(["margarita", "peperoni", "4_cheese"])
    .required("Required"),
  pizzaSize: yup.string().oneOf(["s", "m", "l"]).required("Required"),
});

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

  const initialValue = {
    pizzaName: "margarita",
    pizzaSize: "",
    bonusIngredients: [],
  };

  function handleSubmit(values, actions) {
    console.log(values);
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={scheme}
    >
      <Form>
        <div>
          <label htmlFor={pizzaNameId}>
            Name of pizza
            <Field as="select" name="pizzaName" id={pizzaNameId}>
              <option value="margarita">margarita</option>
              <option value="pepperoni">pepperoni</option>
              <option value="4_cheese">4 cheese</option>
            </Field>
            <p>
              <ErrorMessage name="pizzaName" />
            </p>
          </label>
        </div>
        <div>
          <label>
            <Field type="radio" name="pizzaSize" value="s"></Field>S
          </label>
          <label>
            <Field type="radio" name="pizzaSize" value="m"></Field>M
          </label>
          <label>
            <Field type="radio" name="pizzaSize" value="l"></Field>L
          </label>
          <p>
            <ErrorMessage name="pizzaSize" />
          </p>
        </div>

        <label>
          <Field type="checkbox" name="bonusIngredients" value="meat" />
          {userIngredients.meat}
        </label>
        <label>
          <Field type="checkbox" name="bonusIngredients" value="cheese" />
          {userIngredients.cheese}
        </label>
        <label>
          <Field type="checkbox" name="bonusIngredients" value="vegetarian" />
          {userIngredients.vegetarian}
        </label>

        <button type="submit">Order Pizza</button>
      </Form>
    </Formik>
  );
}

export default OrderPizza;
