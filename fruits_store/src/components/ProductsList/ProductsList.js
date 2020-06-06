import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchProducts from '../../state/products-state/actions/fetchProducts';
import { baseUrlProducts } from '../../utils/url';
import { Loading } from '../Loading';
import { ErrorComponent } from '../ErrorComponent';
import { product_details } from '../../utils/link';
import { ProductInfo } from '../ProductInfo';
import { ImageWithLink } from '../ImageWithLink';
import { CartForm } from '../CartForm';


let ProductsList = props => {
    const { fetchProducts, productsList: { products, isLoading, error } } = props;

    useEffect(() => {
        fetchProducts()
    }, [])

    const renderList = () => {
        return (
            products.map((product, index) => {
                const { name, price, id } = product;
                return (
                    <div className="item-li" className="four columns" style={{ marginLeft: 0 }} key={name + index}>
                        <ImageWithLink
                            src={require('../../orange.jpg')}
                            alt="photo"
                            style={{ width: "30%", height: "30%" }}
                            pathLink={`${product_details}/${id}`}
                        />
                        <ProductInfo
                            title={name}
                            details={'TBD'}
                            price={price}
                        />
                       <CartForm 
                            product={product}
                       />
                    </div>
                )
            })
        )
    }

    return (
        <div className='container'>
            {isLoading && <Loading />}
            {error && <ErrorComponent />}
            <div className='row'>
                <ul>
                    {renderList()}
                </ul>
            </div>
        </div>
    )

}

ProductsList.propTypes = {
    productsList: PropTypes.object.isRequired,
    fetchProducts: PropTypes.func
}

const mapStateToProps = state => {
    return {
        productsList: state.products,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts(baseUrlProducts)),
    }
}
export default ProductsList = connect(mapStateToProps, mapDispatchToProps)(ProductsList)
