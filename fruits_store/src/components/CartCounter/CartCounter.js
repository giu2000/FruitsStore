import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import updateCartCounter from '../../state/cart-state/actions/updateCartProductsCounter';

class CartCounter extends React.Component{

    static propTypes = {
        updateCartCounter: PropTypes.func,
        counter: PropTypes.number
    }

    componentDidMount(){
        this.props.updateCartCounter();
    }

    render(){
        return(
            <div>
                {`Products in Cart: ${this.props.counter}`}
            </div> 
        )
    }
}

const mapStateToProps = state => ({ counter: state.cart.counter })
const mapDispatchToProps = dispatch => ({ updateCartCounter: () => dispatch(updateCartCounter()) })
const CartCounterContainer = connect(mapStateToProps, mapDispatchToProps)(CartCounter);

export default CartCounterContainer;