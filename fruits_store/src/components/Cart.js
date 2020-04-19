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
    BACK_TO_PRODUCTS_LIST 
} from '../utils/labels';

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
                           <Button onClick={() => this.props.removeProductFromCart(product)} text='-' ></Button>
                           <Button onClick={() => this.props.addProductToCart(product)} text='+' ></Button>
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
                <TitlePage title={"Cart"} />
                {isLoading && <Loading />}
                {error && <ErrorComponent />}
                {products.length === 0 ? 
                    <EmptyCart pathLink={'/products_list'} text={'Back to products list'} />
                    : <>
                        <table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                                { this.renderTable(products)}
                            </tbody>
                        </table>
                        <div>Total Price: $ {totalPrice}</div>
                        <CartProductsCounter counter={counter} />
                        <Button onClick={() => this.props.removeAllProductsFromCart(products)} text={'DELETE ALL'}/>
                        <br />
                        <CustomLink pathLink={`/`} text={"HOME"} />
                        <br />
                        <CustomLink pathLink={`/products_list`} text={"PRODUCTS LIST"} /> 
                    
                    </>
                } 
                
                
                }
            </>
        )
    }
}