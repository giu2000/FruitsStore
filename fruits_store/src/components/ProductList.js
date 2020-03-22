import React from 'react';
import Product from './Product';

export default class ProductList extends React.Component{
    componentDidMount(){
        this.props.getAllProducts();
    }
    render(){
        const {loading, error, products} = this.props;
        // debugger;
        if(loading){
            console.log('loading', loading)
            return <div>Loading..</div>
        }
        if(error){
            console.log('error', error)
            return <div>Error...</div>
        }
        console.log('products', products)
        return(
            <>
                <div><b>Products List</b></div>
                <ul className='productList'>
                    {products.map((product, index) => {
                        return (
                            <Product
                                key={product.id}
                                product={product}
                                handleProductClick={this.props.handleProductClick}
                            />
                        )
                    })
                    }
                </ul>
            </>
        )
    }
}