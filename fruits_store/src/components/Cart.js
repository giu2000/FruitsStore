import React from 'react';
import Button from './Button';

export default class Cart extends React.Component{
    componentDidMount(){
        this.props.fetchCartProducts()
    }
    render(){
        const { cart: { isLoading, error, products, totalPrice } } = this.props;
        if(isLoading){
            return (
                <div>Loading...</div>)
        }
        else if(error){
            return(
                <div>Error</div>
            )
        }
        return(
            <>
                <h5>Cart</h5>
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
                        {
                            products.map(product => {
                                return (
                                    <tr key={product.id}>
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
                        }
                    </tbody>
                </table>
                <h6>Total:</h6>
                <div>{totalPrice}</div>
            </>
        )
    }
}