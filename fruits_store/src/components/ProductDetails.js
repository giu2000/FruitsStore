import React from 'react';


export default class ProductDetails extends React.Component{
    componentDidMount(){
        // this.props.getProduct(this.props.productId)
        this.props.getProduct()
    }
 
    render(){
        const { product } = this.props;
        return (
            <div>
                <h5>Product Details</h5>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td><i>$ {product.price}</i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
