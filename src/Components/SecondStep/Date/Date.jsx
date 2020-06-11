import React from "react";
import { Field } from "redux-form";
import { DateInput } from "./DateInput";
import {
  requiredField,
  dayValid,
  monthValid,
  yearValid,
} from "../../../ValidationFunc/ValidationFunc";

const requiredDay = requiredField("Day");
const requiredMonth = requiredField("Month");
const requiredYear = requiredField("Year");

const dateInputs = [
  {
    id: 1,
    name: "day",
    min: 1,
    max: 31,
    placeholder: "DD",
    validate: [requiredDay, dayValid],
  },
  {
    id: 2,
    name: "month",
    min: 1,
    max: 12,
    placeholder: "MM",
    validate: [requiredMonth, monthValid],
  },
  {
    id: 3,
    name: "year",
    min: 1,
    max: 2001,
    placeholder: "YYYY",
    validate: [requiredYear, yearValid],
  },
];

export const Date = ({ error }) => (
  <div className="secondStep__date">
    <h2 className={`secondStep__title ${error ? "error" : ""}`}>
      {error ? "Sorry you should be adult" : "Date of birth"}
    </h2>
    <div className="secondStep__dateWrap">
      {dateInputs.map((item) => (
        <Field
          component={DateInput}
          key={item.id}
          name={item.name}
          type={"number"}
          props={{ ...item, error }}
          validate={item.validate}
        />
      ))}
    </div>
  </div>
);
