import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Button from './Button';
import CustomLink from './CustomLink';
import Loading from './Loading';
import ErrorComponent from './ErrorComponent';
import ItemLi from './ItemLi';
import TitlePage from './TitlePage';
import CartProductsCounter from './CartProductsCounter';


export default class ProductList extends React.Component{
    static propTypes = {
        productsList: PropTypes.object.isRequired
    }

    componentDidMount(){
        this.props.fetchProducts();
        this.props.updateCartProductsCounter();
    }
    renderList(){
        const { productsList: { products } } = this.props;
        return products.map((product, index) => {
            return(
                <ItemLi key={product.id+index}>
                    <Product product={product} name={product.name} price={product.price} />
                    <CustomLink pathLink={`/product_details/${product.id}`} text={"Details"} />
                    <Button onClick={() => this.props.addProductToCart(product)} product={product} text="Add to Cart" />
                </ItemLi>
            )
        })
    }

    render(){
        const { productsList: { isLoading, error }, cartCounter} = this.props;
        return(
            <>
                <TitlePage title={"Products List"} />
                {isLoading && <Loading />}
                {error && <ErrorComponent />}
                <ul>
                    {this.renderList()}
                </ul>
                <CustomLink pathLink={`/`} text={"HOME"} />
                <br />
                <CustomLink pathLink={`/cart`} text={"CART"} />
                <CartProductsCounter counter={cartCounter} />
            </>
        )
    }
}
