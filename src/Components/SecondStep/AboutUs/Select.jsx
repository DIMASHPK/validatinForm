import React from "react";

const options = [
  { id: 1, value: "Select one value" },
  { id: 2, value: "From friends" },
  { id: 3, value: "From Instagramm" },
  { id: 4, value: "From Facebook" },
];

export const Select = ({ input }) => (
  <>
    <select name="aboutUs" className={"secondStep__aboutUsSelect"} {...input}>
      {options.map(({ id, value }, i) => (
        <option
          key={id}
          value={i === 0 ? "" : value}
          disabled={i === 0 ? true : false}
          hidden={i === 0 ? true : false}
          className={"secondStep__aboutUsInput"}
        >
          {value}
        </option>
      ))}
    </select>
  </>
);
