import React from "react";
import { reduxForm, Field } from "redux-form";
import "./FirstStep.css";
import {Input} from "./Input";

const FirstStepWithProps = ({ inputs }) => (
  <section className={`firstStep`}>
    {inputs.map(({  id, ...other }) => (
      <Input key={id} {...other}/>
    ))}
  </section>
);

export default reduxForm({ form: "first page" })(FirstStepWithProps);
