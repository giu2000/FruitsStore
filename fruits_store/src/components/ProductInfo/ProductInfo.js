import React from 'react';
import PropTypes from 'prop-types';

const ProductInfo = props => {
    return(
        <div className='product-info'>
            <div>
                {props.children}
            </div>
        </div>
    )
}

ProductInfo.propTypes = {
    children: PropTypes.array
}

export default ProductInfo;