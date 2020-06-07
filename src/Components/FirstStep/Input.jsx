import React from 'react'

export const Input = ({error, name, label, onChange, onBlur, value, type}) => (
    <div
        className={`firstStep__inputWrap ${error.length > 1 ? "error" : ""}`}
    >
        <label className={"firstStep__label"} htmlFor={name}>
            {error.length > 1 ? error : name}
        </label>
        <input
            className="firstStep__input"
            type={type}
            name={label ? label : name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
        />
    </div>
)