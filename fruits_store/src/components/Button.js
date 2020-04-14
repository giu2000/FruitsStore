import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    const { text, onClick } = props;
    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}
Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired

}

export default Button;
