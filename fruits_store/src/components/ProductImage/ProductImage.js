import React from 'react';
import PropTypes from 'prop-types';

const ProductImage = props => {
    return(
        <div className='product-image'>
            {props.children}
        </div>
    )
}

ProductImage.propTypes = {
    children: PropTypes.object
}

export default ProductImage;