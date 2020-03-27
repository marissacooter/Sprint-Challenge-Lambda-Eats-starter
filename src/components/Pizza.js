import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";

//setting up my validations
const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")
    .min(2, "Name must be atleast two characters"),
  pizzaSize: yup.string().required("Select a size"),
  //maybe change back to yup.string
  toppings: yup.array().required("Please agree to terms of use"),
  //or try this:
  // toppings: yup.string().required("sausage"),
  specInstr: yup
    .string()
    .required("Add special instructions for your delivery!")
});

//setting my state for form
function Pizza() {
  const [formState, setFormState] = useState({
    name: "",
    pizzaSize: "",
    toppings: [],
    specInstr: ""
  });
  //setting up state for errors
  const [errors, setErrors] = useState({
    name: "",
    pizzaSize: "",
    toppings: "",
    specInstr: ""
  });

  //setting up state for disabled button until req fields are filled out
  const [buttonDisabled, setButtonDisabled] = useState(true);

  //validating use effect
  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  //validating change
  const validateChange = (targetName, targetValue) => {
    yup
      .reach(formSchema, targetName)
      .validate(targetValue)
      .then(valid => {
        setErrors({
          ...errors,
          [targetName]: ""
        });
      })
      .catch(error => {
        setErrors({
          ...errors,
          [targetName]: error.errors
        });
      });
  };

  // creating my function to submit form data
  const formSubmit = e => {
    //preventDefault prevents page from refreshing on it's own
    e.preventDefault();
    // if statement is saying if errors exist don't allow form to post
    if (!errors.name) {
      axios
        //.post is saying send this data (our form state) to this url
        .post("https://reqres.in/api/users", formState)
        //res is sending our user data back to us
        .then(res => {
          // setFormState(existing => [...existing, res.data]);
          console.log("success", res);
          //after we receive data back we want to clear our text fields:
          setFormState({
            name: "",
            pizzaSize: "",
            toppings: "",
            specInstr: ""
          });
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  };

  // writing my input change
  const inputChange = e => {
    e.persist();
    const targetName = e.target.name;
    // if target value is checked use check box if not use value
    const targetValue = e.target.value;

    validateChange(targetName, targetValue);
    setFormState({
      ...formState,
      [targetName]: targetValue
    });
  };

  const handleCheck = e => {
    e.persist();
    setFormState({
      ...formState,
      toppings: [...formState.toppings, e.target.value]
    });
  };

  return (
    <Container>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name
          <input
            data-cy="name"
            type="text"
            name="name"
            placeholder="Name Your Pizza"
            value={formState.name}
            onChange={inputChange}
          />
          {/* checking how many errors are in field */}
          {errors.name.length < 2 ? <p>{errors.name}</p> : null}
        </label>

        <select name="pizzaSize" id="pizzaSize" onChange={inputChange}>
          <option name="toppings" value="">
            Select a Size...
          </option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <Toppings>
          <div>
            <label htmlFor="toppings">
              <input
                id="toppings"
                data-cy="toppings"
                type="checkbox"
                name="toppings"
                value="pepperoni"
                onChange={handleCheck}
              />
              <span>Pepperoni</span>
            </label>
          </div>

          <div>
            <label htmlFor="toppings">
              <input
                data-cy="toppings"
                type="checkbox"
                name="toppings"
                value="olives"
                onChange={handleCheck}
              />
              <span>Olives</span>
            </label>
          </div>

          <div>
            <input
              data-cy="toppings"
              type="checkbox"
              name="toppings"
              value="plain cheese"
              onChange={handleCheck}
            />
            <span>Plain Cheese</span>
          </div>

          <div>
            <input
              data-cy="toppings"
              type="checkbox"
              name="toppings"
              value="meat lovers"
              onChange={handleCheck}
            />
            <span>Meat Lovers</span>
          </div>
        </Toppings>

        <label htmlFor="specInstr">
          <input
            data-cy="specInstr"
            type="text"
            name="specInstr"
            placeholder="Special Instructions"
            value={formState.specInstr}
            onChange={inputChange}
          />
        </label>

        <button type="submit">Order Pizza</button>
      </form>
    </Container>
  );
}

export default Pizza;

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  alignitems: center;

  form {
    display: flex;
    flex-direction: column;

    input {
      margin: 1rem 0;
    }
  }
`;

const Toppings = styled.div``;
