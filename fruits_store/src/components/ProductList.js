import React from 'react';
import Product from './Product';
import Button from './Button';
import CustomLink from './CustomLink';
import Loading from './Loading';
import Error from './Error';
import ItemLi from './ItemLi';

export default class ProductList extends React.Component{
    componentDidMount(){
        this.props.fetchProducts();
    }
    renderList(){
        const { productsList: { products } } = this.props;
        console.log(products)
        return products.map((product, index) => {
            return(
                // <li key={product.id+index}>
                //     <Product product={product} name={product.name} price={product.price} />
                //     <CustomLink pathLink={`/product_details/${product.id}`} text={"Details"} />
                //     <Button onClick={() => this.props.addProductToCart(product)} product={product} text="Add to Cart" />
                // </li>
                <ItemLi>
                    <Product product={product} name={product.name} price={product.price} />
                    <CustomLink pathLink={`/product_details/${product.id}`} text={"Details"} />
                    <Button onClick={() => this.props.addProductToCart(product)} product={product} text="Add to Cart" />
                </ItemLi>
            )
        })
    }

    render(){
        const { productsList: { isLoading, error } } = this.props;
        return(
            <>
                <h5>Products List</h5>
                {/* {isLoading && <Loading />}
                {error && <Error />} */}
                <ul>{console.log('render')}
                    {this.renderList()}
                </ul>
            </>
        )
    }
}
