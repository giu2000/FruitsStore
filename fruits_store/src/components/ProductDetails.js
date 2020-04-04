import React from 'react';

const ProductDetails = props => {
    const { product } = props;
    return (
        <div>
            <div><b>Product Details</b></div>
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

export default ProductDetails;
