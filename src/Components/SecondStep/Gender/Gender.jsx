import React from "react";
import { GenderInput } from "./GenderInput";
import { Field } from "redux-form";

const genderInputs = [
  { id: 1, value: "male" },
  { id: 2, value: "female" },
  { id: 3, value: "unspecified" },
];

export const Gender = () => (
  <div className="secondStep__gender">
    <h2 className="secondStep__title">Gender</h2>
    <div className="secondStep__genderWrap">
      {genderInputs.map(({ id, value }) => (
        <Field
          component={GenderInput}
          key={id}
          props={{ value }}
          name={"gender"}
        />
      ))}
    </div>
  </div>
);
