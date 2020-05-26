import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '../Button'
import { Loading } from '../Loading';
import { ErrorComponent } from '../ErrorComponent';
import CustomLink from '../CustomLink';
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
                <CustomLink 
                    pathLink={pathLink} 
                    text={text}
                    style={{textAlign: 'center'}}
                />
            </div>
        </div>
    )
}

EmptyCart.propTypes = {
    pathLink: PropTypes.string.isRequired,
    text: PropTypes.string
}

class Cart extends React.Component{

    static propTypes = {
        cart: PropTypes.object.isRequired
    }

    componentDidMount(){
        this.props.fetchCartProducts()
    }

    renderList = products => {
        const { removeProductFromCart, addProductToCart } = this.props;
        return(
            products.map((product, index) => {
                const { id, name, quantity, productTotalPrice } = product;
                return(
                    <div className="nine columns" key={product.id + index}>
                        <div >
                            <ImageWithLink
                                src={require('../../orange.jpg')}
                                alt="photo"
                                style={{ width: "30%", height: "30%" }}
                                pathLink={`${product_details}/${id}`}
                            />
                            <div className="two columns">
                                <Title
                                    title={name}
                                />
                            </div>

                            <div className="three columns" className='product-action'>
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
                            <div className="two columns">
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
    render(){
        const { cart: { isLoading, error, products, totalPrice } } = this.props;
        return(
            <div className='container'>
                {isLoading && <Loading />}
                {error && <ErrorComponent />}
                {products.length === 0 ? 
                    <EmptyCart pathLink={products_list} text={BACK_TO_PRODUCTS_LIST_LINK} />
                    : <div className='row'>
                        <div className='nine columns'>
                            {this.renderList(products)}
                        </div>
                        <div className='three columns'>
                           <div>{`${TOTAL_PRICE}: $ ${totalPrice}`}</div>
                            <Button onClick={() => this.props.removeAllProductsFromCart(products)} text={DELETE_ALL} />
                        </div>

                    </div>

                }
            </div>
        )
    }
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

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;