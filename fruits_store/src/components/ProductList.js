import React from 'react';
import Product from './Product';
import Button from './Button';
import ProductDetailsLink from '../containers/ProductDetailsLinkContainer';
import { Link, NavLink } from 'react-router-dom';
import CustomLink from './CustomLink';

export default class ProductList extends React.Component{
    componentDidMount(){
        this.props.getAllProducts();
    }
    render(){
        const { productsList: { isLoading, error, products, currentProduct } } = this.props;
        if(isLoading){
            return <div>Loading..</div>
        }
        if(error){
            return <div>Error...</div>
        }
        return(
            <>
                <h5>Products List</h5>
                <ul className='productList'>
                    {products.map((product, index) => {
                        return (
                            <div key={product.id + index}>
                                <Product
                                    product={product}
                                />

                                <ProductDetailsLink productId={product.id} />
                                
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
/* <Button onClick={() => this.props.getProduct(product.id) } text="Product Details" /> */