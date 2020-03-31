import React from 'react';
import Product from './Product';
import Button from './Button';

export default class ProductList extends React.Component{

    componentDidMount(){
        this.props.getAllProducts();
    }

    render(){
        const { isLoading, error, products, getProduct, addProductToCart } = this.props;
        if(isLoading){
            return <div>Loading..</div>
        }
        if(error){
            return <div>{error}</div>
        }
        return(
            <>
                <h5>Products List</h5>
                <div className="container">
                    <div className="row" >
                    {products.map((product, index) => {
                        return (
                                <div key={product.id + index} className="four columns product-card">
                                    <Product product={product} />
                                    <hr />
                                    <Button onClick={() => getProduct(product.id)} text="Details" />
                                    <Button onClick={() => addProductToCart(product)} customClass="button-primary" text="Add to Cart" />
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </>
        )
    }
}