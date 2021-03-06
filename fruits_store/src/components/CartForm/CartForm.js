import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import addProductToCart from "../../state/cart-state/actions/addProductToCart";

let CartForm = props => {
    const { product, addProductToCart } = props;
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const { productToAdd, quantity } = data;
        addProductToCart(productToAdd, quantity)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                name='quantity'
                type='number'
                defaultValue={0}
                ref={register({
                        validate: {
                            positive: value => parseInt(value) > 0 || 'negative number'
                        }
                    })}
            />
            {errors.quantity && <div>Cannot add negative number  of products</div>}
            <input 
                name='productToAdd'
                type='hidden'
                defaultValue={JSON.stringify(product)}
                ref={register({required: true})}
            />
            <input 
                type='submit'
            />
        </form>
    )
}

CartForm.propTypes = {
    product: PropTypes.object,
    productToAdd: PropTypes.object,
    quantity: PropTypes.string,
    addProductToCart: PropTypes.func
}

const mapDispatchToProps = dispatch => {
    return {
        addProductToCart: (product, quantity) => dispatch(addProductToCart(product, quantity))
    }
}

export default CartForm = connect(({ productToAdd, quantity }) => ({ productToAdd, quantity}), mapDispatchToProps)(CartForm);


