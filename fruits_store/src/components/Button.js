import React from 'react';

const Button = props => {
    return(
        <button className={props.customClass} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button;
