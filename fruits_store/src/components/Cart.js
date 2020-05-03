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
import Navbar, { homeConfig, productListConfig} from './Navbar';

//Component Empty Cart
const EmptyCart = ({pathLink, text}) => {
    return(
        <div className='container'>
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

const notEmptycart = () => {

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
                        <td>{product.name}</td>
                        
                        <td>
                           <Button onClick={() => this.props.removeProductFromCart(product)} text={remove_from_cart_symbol} ></Button>
                            <span>{product.quantity}</span>
                           <Button onClick={() => this.props.addProductToCart(product)} text={add_to_cart_symbol} ></Button>
                       </td>
                        <td><i>$ {product.productTotalPrice}</i></td>
                   </tr>
               )
            })
       )
           
    }
    render(){
        const { cart: { isLoading, error, products, totalPrice, counter } } = this.props;
        return(
            <div>
                
                <Navbar firstConfig={homeConfig} secondConfig={productListConfig}/>
                {isLoading && <Loading />}
                {error && <ErrorComponent />}
                
                {products.length === 0 ? 
                    <EmptyCart pathLink={products_list} text={BACK_TO_PRODUCTS_LIST_LINK} />
                    : <div className='container' style={{outline:'1px solid black'}}>
                        <div className='row' style={{outline: '1px solid red'}}>
                            <table className='eight columns' style={{outline:'1px solid green'}}>
                                <thead>
                                    <tr>
                                        <th>{PRODUCT_NAME}</th>
                                        <th>{PRODUCT_QUANTITY}</th>
                                        <th>{PRODUCT_PRICE}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderTable(products)}
                                </tbody>
                            </table>
                            <div className='four columns' style={{outline: '1px solid green'}}>
                                <div>{`${TOTAL_PRICE}: $ ${totalPrice}`}</div>
                                <CartProductsCounter counter={counter} />
                            </div>
                        </div>
                        
                        <Button onClick={() => this.props.removeAllProductsFromCart(products)} text={DELETE_ALL}/>
                        <br />
                    </div>

                }
            </div>
        )
    }
}