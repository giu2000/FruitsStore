import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import updateCartCounter from '../../state/cart-state/actions/updateCartProductsCounter';

let CartCounter = props => {
    const { counter, updateCartCounter } = props
    useEffect(() => updateCartCounter())
    return(
        <div>
            {`Products in Cart: ${counter}`}
        </div>
    )
}

CartCounter.propTypes = {
    counter: PropTypes.number,
    updateCartCounter: PropTypes.func
}

const mapStateToProps = state => ({ counter: state.cart.counter })
const mapDispatchToProps = dispatch => ({ updateCartCounter: () => dispatch(updateCartCounter()) })
CartCounter = connect(mapStateToProps, mapDispatchToProps)(CartCounter);

export default CartCounter;