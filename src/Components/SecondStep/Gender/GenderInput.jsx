import React from "react";

export const GenderInput = ({ input, meta, value }) => (
  <div
    className={`secondStep__generElementWrap ${
      input.value === value ? "active" : ""
    }`}
  >
    <label className="secondStep__genderElementLabel" htmlFor={value}>
      {value}
    </label>
    <input
      id={value}
      type="radio"
      {...input}
      value={value}
      checked={input.value === value}
      className={`secondStep__genderElement `}
      hidden
    />
  </div>
);
