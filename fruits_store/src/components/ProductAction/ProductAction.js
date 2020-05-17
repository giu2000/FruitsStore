import React from 'react';
import PropTypes from 'prop-types';

const ProductAction = props => {
    return(
        <div className="product-action">
            {props.children}
        </div>
    )
}

ProductAction.propTypes = {
    children: PropTypes.object
}

export default ProductAction;