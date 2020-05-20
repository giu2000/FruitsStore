import React from 'react';
import PropTypes from 'prop-types';

const ProductAction = props => {
    return(
        <div className="product-action" style={props.style}>
            {props.children}
        </div>
    )
}

ProductAction.propTypes = {
    children: PropTypes.object
}

export default ProductAction;