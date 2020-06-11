import React from 'react'

export const Input = ({input:{name, ...other}, meta: {error, touched}, ...props}) => (
    <div
        className={`firstStep__inputWrap ${touched && error ? "error" : ""}`}
    >
        <label className={"firstStep__label"} htmlFor={name}>
            {touched && error? error : name}
        </label>
        <input
            className="firstStep__input"
            id = {name}
            {...other}
            {...props}
        />
    </div>
)