import React, {memo} from 'react';
import s from "./Button.module.css";

const Button = memo(function Button(props) {
    return (
        <button onClick={props.onClick} className={`${s.button} ${props.className}`} type='text'>
            {props.children}
        </button>
    );
})

export default Button;