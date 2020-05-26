import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../Title';
import { Details } from '../Details';
import { Price } from '../Price';

const ProductInfo = props => {
    const { title, details, price } = props;
    return(
        <div className='product-info'>
            <div className='product-info'>
                <Title
                    title={title}
                />
                <Details    
                    details={details}
                />
                <Price  
                    price={price}
                />
            </div>
        </div>
    )
}

ProductInfo.propTypes = {
    title: PropTypes.string,
    details: PropTypes.string,
    price: PropTypes.string
}

export default ProductInfo;