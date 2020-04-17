import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Loading from './Loading';
import ErrorComponent from './ErrorComponent';
import TitlePage from './TitlePage';
import CustomLink from './CustomLink';
import CartProductsCounter from './CartProductsCounter';

export default class Cart extends React.Component{

    static propTypes = {
        cart: PropTypes.object.isRequired
    }

    componentDidMount(){
        this.props.fetchCartProducts()
        this.props.updateCartProductsCounter();
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
                            <Button onClick={() => this.props.addProductToCart(product)} text='+' ></Button>
                            <Button onClick={() => this.props.removeProductFromCart(product)} text='-' ></Button>
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
                <CustomLink pathLink={`/`} text={"HOME"} />
                <br />
                <CustomLink pathLink={`/products_list`} text={"PRODUCTS LIST"} />

            </>
        )
    }
}