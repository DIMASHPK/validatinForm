import React from "react";

export const DateInput = ({
  adult,
  input,
  meta,
  meta: { touched },
  error,
  ...props
}) => (
  <div className={"secondStep__dateElementWrap"}>
    <input
      type="number"
      {...props}
      {...input}
      className={`secondStep__dateElement ${
        (touched && error) || (touched && meta.error) ? "error" : ""
      }`}
    />
    <span className={"secondStep__dateError"}>
      {(touched && error) || (touched && meta.error)}
    </span>
  </div>
);
