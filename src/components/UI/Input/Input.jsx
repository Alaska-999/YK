import React from 'react';
import s from "./Input.module.css";

const Input = (props) => {
    return (
        <input type={props.type}
               value={props.value}
               placeholder={props.placeholder}
               className={s.input}
               onChange={props.onChange}
        />
    );
};

export default Input;