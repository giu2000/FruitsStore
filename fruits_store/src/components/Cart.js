import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Loading from './Loading';
import ErrorComponent from './ErrorComponent';
import TitlePage from './TitlePage';
import CustomLink from './CustomLink';
import CartProductsCounter from './CartProductsCounter';
import { 
    EMPTY_CART, 
    BACK_TO_PRODUCTS_LIST, 
    PRODUCT_ID,
    PRODUCT_NAME,
    PRODUCT_PRICE,
    PRODUCT_QUANTITY,
    BACK_TO_PRODUCTS_LIST_LINK,
    DELETE_ALL,
    HOME_PAGE_NAME,
    CART_PAGE_NAME,
    TOTAL_PRICE,
    PRODUCTS_LIST_PAGE_NAME,
    add_to_cart_symbol,
    remove_from_cart_symbol
} from '../utils/labels';
import { 
    home, 
    products_list 
} from '../utils/link';

//Component Empty Cart
const EmptyCart = ({pathLink, text}) => {
    return(
        <>
            <p>{EMPTY_CART}</p>
            <p>{BACK_TO_PRODUCTS_LIST}</p>
            <CustomLink  pathLink={pathLink} text={text}/>
        </>
    )
}

EmptyCart.propTypes = {
    pathLink: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default class Cart extends React.Component{

    static propTypes = {
        cart: PropTypes.object.isRequired
    }

    componentDidMount(){
        this.props.fetchCartProducts()
    }

    componentDidUpdate(prevProps){
        if(this.props.cart.isEmpty !== prevProps.cart.isEmpty){
            this.props.fetchCartProducts()
        }
    }

    renderTable = products => {
        return(
            products.map((product, index) => {
                return(
                    <tr key={product.id + index}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td><i>$ {product.price}</i></td>
                        <td>{product.quantity}</td>
                        <td>
                           <Button onClick={() => this.props.removeProductFromCart(product)} text={remove_from_cart_symbol} ></Button>
                           <Button onClick={() => this.props.addProductToCart(product)} text={add_to_cart_symbol} ></Button>
                       </td>
                   </tr>
               )
            })
       )
           
    }
    render(){
        const { cart: { isLoading, error, products, totalPrice, counter } } = this.props;
        return(
            <>
                <TitlePage title={CART_PAGE_NAME} />
                {isLoading && <Loading />}
                {error && <ErrorComponent />}
                {products.length === 0 ? 
                    <EmptyCart pathLink={products_list} text={BACK_TO_PRODUCTS_LIST_LINK} />
                    : <>
                        <table>
                            <thead>
                            <tr>
                                <th>{PRODUCT_ID}</th>
                                <th>{PRODUCT_NAME}</th>
                                <th>{PRODUCT_PRICE}</th>
                                <th>{PRODUCT_QUANTITY}</th>
                            </tr>
                            </thead>
                            <tbody>
                                { this.renderTable(products)}
                            </tbody>
                        </table>
                        <div>{`${TOTAL_PRICE}: $ ${totalPrice}`}</div>
                        <CartProductsCounter counter={counter} />
                        <Button onClick={() => this.props.removeAllProductsFromCart(products)} text={DELETE_ALL}/>
                        <br />
                        <CustomLink pathLink={home} text={HOME_PAGE_NAME} />
                        <br />
                        <CustomLink pathLink={products_list} text={PRODUCTS_LIST_PAGE_NAME} /> 
                    
                    </>
                } 
                
                
                }
            </>
        )
    }
}