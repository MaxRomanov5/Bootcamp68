import { useId, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addPizza } from "../../redux/action";

const scheme = yup.object().shape({
  pizzaName: yup
    .string()
    .oneOf(["margarita", "pepperoni", "4_cheese"])
    .required("Required"),
  pizzaSize: yup.string().oneOf(["s", "m", "l"]).required("Required"),
});

function OrderPizza() {
  const pizzaNameId = useId();

  const dispatch = useDispatch();

  const userIngredients = {
    meat: "Double Meat",
    cheese: "Double Cheese",
    vegetarian: "Vegetarian",
  };

  const initialValue = {
    pizzaName: "margarita",
    pizzaSize: "",
    bonusIngredients: [],
  };

  function handleSubmit(values, actions) {
    console.log(values);
    values.id = nanoid();
    dispatch(addPizza(values));
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
