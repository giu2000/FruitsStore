import React from 'react';
import PropTyepes from 'prop-types';
import { connect } from 'react-redux';
import { ProductInfo } from '../ProductInfo';
import { Image } from '../Image';
import { AddToCartForm } from '../AddToCartForm';
import fetchProductDetails from "../../state/product-details-state/actions/fetchProductDetails";
import addProductToCart from "../../state/cart-state/actions/addProductToCart";
import fetchCartProducts from "../../state/cart-state/actions/fetchCartProducts";

class ProductDetails extends React.Component{
    static propTypes = {
        product: PropTyepes.object.isRequired
    }
    componentDidMount(){
        this.props.fetchProductDetails();
        this.props.fetchCartProducts();
    }
    submit = (values, product) => {
        this.props.addProductToCart(product, values);
    }
 
    render(){
        const { product } = this.props;
        const { name, price } = product;
        return (
            <div className='container'>
                <div className="product-details">
                    <div className="row">
                        <div className="four columns">
                            <Image
                                alt={"potho"}
                                style={{ width: "50%" }}
                            />
                        </div>
                        <div className="six columns">
                            <ProductInfo
                                title={name}
                                details={'TBD'}
                                price={price}
                            />
                            <AddToCartForm
                                onSubmit={values => this.submit(values, product)}
                                name={name}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { products, cart } = state
    return {
        product: products.currentProduct,
        cart: cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProductDetails: () => dispatch(fetchProductDetails(ownProps.productId)),
        fetchCartProducts: () => dispatch(fetchCartProducts),
        addProductToCart: (product, quantityChoosen) => dispatch(addProductToCart(product, quantityChoosen)),
    }
}

const ProductDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

export default ProductDetailsContainer;
