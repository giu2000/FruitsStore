import React from 'react';

export default class Cart extends React.Component{
    componentDidMount(){
        this.props.getCartProducts();
        console.log('component did mount', this.props.cart)
    }
    render(){
        console.log(this.props.cart)
        const { cart } = this.props;
        console.log('cart',cart)
        return(
            <div className='cart'>
                <h5>Cart</h5>
                <div>
                    { !cart.products.length ? 
                        <p>Cart empty</p>
                        : <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.products.map(product => {
                                        return (
                                            <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>{product.quantity}</td>
                                            </tr>
                                            
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        )
    }
}