import React from 'react';

// il Button non deve avere logica legata al Market
// deve ricevere delle props e basta
const Button = props => {
    return(

        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button;
