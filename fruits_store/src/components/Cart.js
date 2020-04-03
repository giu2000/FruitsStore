import React from 'react';

export default class Cart extends React.Component{
    componentDidMount(){
        this.props.getCartProducts();
        console.log('component did mount', this.props.cart)
    }
    render(){
        const { cart: {isLoading, error, products } } = this.props;
        if(isLoading){
            return <div>Loading..</div>
        }
        if(error){
            return <div>Error...</div>
        }
        return(
            <div className='cart'>
                <h5>Cart</h5>
                <div>
                    { !products.length ? 
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
                                    products.map(product => {
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