import React from 'react';
import Product from './Product';
import Button from './Button';

export default class ProductList extends React.Component{
    componentDidMount(){
        this.props.getAllProducts();
    }
    render(){
        const { productsList: { isLoading, error, products } } = this.props;
        if(isLoading){
            return <div>Loading..</div>
        }
        if(error){
            return <div>Error...</div>
        }
        return(
            <>
                <div><b>Products List</b></div>
                <ul className='productList'>
                    {products.map((product, index) => {
                        console.log('product', product)
                        return (
                            <div key={product.id + index}>
                                <Product
                                    product={product}
                                />
                                <Button onClick={() => this.props.getProduct(product.id) } text="Product Details" />
                                <Button onClick={() => this.props.addProductToCart(product)} product={product} text="Add to Cart" />
                            </div>
                        )
                    })
                    }
                </ul>
            </>
        )
    }
}