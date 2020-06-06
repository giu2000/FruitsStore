import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../Button'
import { Loading } from '../Loading';
import { ErrorComponent } from '../ErrorComponent';
import { ImageWithLink } from '../ImageWithLink';
import { Title } from '../Title';
import { Price } from '../Price';

import { 
    EMPTY_CART, 
    BACK_TO_PRODUCTS_LIST_LINK,
    DELETE_ALL,
    TOTAL_PRICE,
    add_to_cart_symbol,
    remove_from_cart_symbol
} from '../../utils/labels';
import { 
    product_details, 
    products_list 
} from '../../utils/link';

import { baseUrlCart } from '../../utils/url';

import fetchCartProducts from '../../state/cart-state/actions/fetchCartProducts';
import addProductToCart from '../../state/cart-state/actions/addProductToCart';
import removeProductFromCart from '../../state/cart-state/actions/removeProductFromCart';
import removeAllProductsFromCart from '../../state/cart-state/actions/removeAllProductsFromCart';
import updateCartProductsCounter from '../../state/cart-state/actions/updateCartProductsCounter';

//Component Empty Cart
const EmptyCart = ({pathLink, text}) => {
    return(
        <div className='telwe columns'>
            <div className='row' style={{outline: '1px solid black', display:'grid'}}>
                <p style={{textAlign: 'center'}}>{EMPTY_CART}</p>
                <Link style={{ textAlign: 'center' }}
                    to={pathLink} 
                >{text}
                </Link>
            </div>
        </div>
    )
}

EmptyCart.propTypes = {
    pathLink: PropTypes.string.isRequired,
    text: PropTypes.string
}

let Cart = props => {
    let { fetchCartProducts,
            removeProductFromCart,
            addProductToCart,
            removeAllProductsFromCart,
            cart: { isLoading, error, products, totalPrice }
        } = props

    useEffect(() => {
        fetchCartProducts()
    }, []);

    const renderList = products => {
        return (
             products.map((product, index) => {
                const { id, name, quantity, productTotalPrice } = product;
                    return(
                     <div key={product.id + index}>
                         <div style={{display:'flex'}}>
                             <ImageWithLink
                                 
                                 alt="photo"
                                 style={{ width: "30%", height: "30%" }}
                                 pathLink={`${product_details}/${id}`}
                             />
                             <div >
                                 <Title
                                     title={name}
                                 />
                             </div>

                             <div  className='product-action'>
                                 <Button
                                     onClick={() => removeProductFromCart(product)}
                                     text={remove_from_cart_symbol}
                                 />
                                 <span>{quantity}</span>
                                 <Button
                                     onClick={() => addProductToCart(product)}
                                     text={add_to_cart_symbol}
                                 />
                             </div>
                             <div >
                                 <Price
                                     price={String(productTotalPrice)}
                                 />
                             </div>
                         </div>
                     </div>

                 )
             })
         )
    }

    return (
             <div className='container'>
                 {isLoading && <Loading />}
                 {error && <ErrorComponent />}
                 {products.length === 0 ? 
                     <EmptyCart pathLink={products_list} text={BACK_TO_PRODUCTS_LIST_LINK} />
                     : <div className='row'>
                         <div className='nine columns'>
                             {renderList(products)}
                         </div>
                         <div className='three columns'>
                            <div>{`${TOTAL_PRICE}: $ ${totalPrice}`}</div>
                             <Button onClick={() => removeAllProductsFromCart(products)} text={DELETE_ALL} />
                         </div>

                     </div>

                 }
             </div>
         )

}

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    removeProductFromCart: PropTypes.func,
    addProductToCart: PropTypes.func,
    removeAllProductsFromCart: PropTypes.func
}

const mapStateToProps = state => ({ cart: state.cart });
const mapDispatchToProps = dispatch => {
    return {
        fetchCartProducts: () => dispatch(fetchCartProducts(baseUrlCart)),
        addProductToCart: product => dispatch(addProductToCart(product)),
        removeProductFromCart: product => dispatch(removeProductFromCart(product)),
        removeAllProductsFromCart: () => dispatch(removeAllProductsFromCart()),
        updateCartProductsCounter: () => dispatch(updateCartProductsCounter(baseUrlCart))
    }
}

export default Cart = connect(mapStateToProps, mapDispatchToProps)(Cart);
