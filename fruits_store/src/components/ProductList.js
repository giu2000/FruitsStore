import React from 'react';
import Product from './Product';
import Button from './Button';

export default class ProductList extends React.Component{
    componentDidMount(){
        this.props.getAllProducts();
    }
    render(){
        const {loading, error, products} = this.props;
        if(loading){
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
                        return (
                            <div key={product.id + index}>
                                <Product
                                    product={product}
                                    handleProductClick={this.props.handleProductClick}
                                />
                                <Button onClick={this.props.handleClickAddToCart} text="Add to Cart" />
                            </div>
                        )
                    })
                    }
                </ul>
            </>
        )
    }
}