import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { ADD_TO_CART } from '../../utils/labels';

const AddToCartButton = props => {
    return(
        <div className="add-to-cart-btn">
            <Button
                text={ADD_TO_CART}
                onClick={props.onClick}
            />
        </div>
    )
}

AddToCartButton.propTypes = {
    onClick: PropTypes.func
}

AddToCartButton.defaultProps = {
    onClick: () => {}
}

export default AddToCartButton;