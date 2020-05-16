import React from 'react';
import PropTypes from 'prop-types';

const Price = props => {
    return (
        <div className='price'>
            <div>
                {props.currency}
                <span />
                {props.price}
            </div>
        </div>
    ) 
}

Price.propTypes = {
    currency: PropTypes.string,
    price: PropTypes.string
}

Price.defaultProps = {
    currency: "$",
}

export default Price;
