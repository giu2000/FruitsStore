import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ name, price}) => {
    return (
        <div style={{outline: '1px solid black', margin:'1%'}}>
            <img src={require('./orange.jpg')} style= {{ width: "30%", height: "30%" }}/>
            <div>
                <b>{name}</b> 
            </div>
            <div>Details TBD</div>
            <div>
                ${price}
            </div>
        </div>)
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export default Product;