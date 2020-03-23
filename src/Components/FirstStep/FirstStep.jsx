import React from "react";
import "./FirstStep.css";

export const FirstStepWithProps = ({ inputs }) => (
  <section className={`firstStep`}>
    {inputs.map(({ name, id, label, value, onChange, onBlur, error }) => (
      <div
        key={id}
        className={`firstStep__inputWrap ${error.length > 1 ? "error" : ""}`}
      >
        <label className={"firstStep__label"} htmlFor={name}>
          {error.length > 1 ? error : name}
        </label>
        <input
          className="firstStep__input"
          type="text"
          name={label ? label : name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
    ))}
  </section>
);
