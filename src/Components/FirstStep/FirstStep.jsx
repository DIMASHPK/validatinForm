import React from "react";
import { Field } from "redux-form";
import { Input } from "./Input";
import {
  confirmationPasswordValid,
  emailValid,
  minLength,
  requiredField,
} from "../../ValidationFunc/ValidationFunc";
import "./FirstStep.css";

const requiredEmail = requiredField("Email");
const requiredPassword = requiredField("Password");
const requiredConfirm = requiredField("Confirm password");
const minPasswordLength = minLength(6);

const inputs = [
  { id: 1, name: "email", validate: [requiredEmail, emailValid] },
  {
    id: 2,
    name: "password",
    type: "password",
    validate: [requiredPassword, minPasswordLength],
  },
  {
    id: 3,
    name: "confirm password",
    type: "password",
    validate: [requiredConfirm, confirmationPasswordValid],
  },
];

export const FirstStep = () => (
  <section className={`firstStep`}>
    {inputs.map(({ id, type, name, validate }) => (
      <>
        <Field
          component={Input}
          key={id}
          type={type}
          name={name}
          validate={validate}
        />
      </>
    ))}
  </section>
);
