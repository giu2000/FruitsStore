import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    const { text, type, onClick } = props;
    return(
        <div className='btn'>
            <button 
                onClick={onClick}
                type={type}
            >{text}
            </button>
        </div>
    )
}
Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;
