import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios";
import styled from 'styled-components';

//setting up my validations
const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    pizzaSize: yup.string().required("Select a size"),
//maybe change back to yup.string
    toppings: yup.array().required("Please agree to terms of use"),
//or try this: 
// toppings: yup.string().required("sausage"),
    specInstr: yup.string().required("Add special instructions for your delivery!")
})

//setting my state for form
function Pizza() {
    const [formState, setFormState] = useState({
      name: "",
      pizzaSize: "",
      toppings: [],
      specInstr: ""
    });
}

//setting up state for errors
const [errors, setErrors] = useState({
    name: "",
    pizzaSize: "",
    toppings: "",
    specInstr: ""
  });

//setting up state for disabled button until req fields are filled out
const [buttonDisabled, setButtonDisabled] = useState(true);

export default Pizza;