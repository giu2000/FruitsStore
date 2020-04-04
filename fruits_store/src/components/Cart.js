import React from 'react';

export default class Cart extends React.Component{
    componentDidMount(){
        this.props.getCartProducts()
    }
    render(){
        const { cart: { isLoading, error, products } } = this.props;
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
                            return(
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td><i>$ {product.price}</i></td>
                                    <td>{product.quantity}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}