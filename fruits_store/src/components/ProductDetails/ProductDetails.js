import React, { useEffect } from 'react';
import PropTyepes from 'prop-types';
import { connect } from 'react-redux';
import fetchProductDetails from "../../state/product-details-state/actions/fetchProductDetails";
import { ProductInfo } from '../ProductInfo';
import { Image } from '../Image';
import { CartForm } from '../CartForm';

let ProductDetails = props => {
    const { product, fetchProductDetails } = props;
    const { name, price } = product;

    useEffect(() => {
        fetchProductDetails()
    }, []);

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
                        <CartForm
                            product={product} 
                        />
                    </div>                  
                </div>
            </div>
        </div>
    )
}

ProductDetails.propTypes = {
    product: PropTyepes.object.isRequired
}


const mapStateToProps = state => {
    const { products } = state
    return {
        product: products.currentProduct,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProductDetails: () => dispatch(fetchProductDetails(ownProps.productId)),
    }
}

export default ProductDetails = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

