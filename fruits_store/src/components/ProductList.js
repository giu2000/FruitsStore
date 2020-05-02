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
import FormComponent from './FormComponent';
import { product_details, home, cart } from '../utils/link';
import {    
    PRODUCTS_LIST_PAGE_NAME, ADD_TO_CART, 
    HOME_LINK_PLACEHOLDER, CART_LINK_PLACEHOLDER, 
    PRODUCT_DETAILS_LINK_PLACEHOLDER 
} from '../utils/labels';



export default class ProductList extends React.Component{
    static propTypes = {
        productsList: PropTypes.object.isRequired
    }
    submit = (values, product) => {
        this.props.addProductToCart(product, values);
    }
    componentDidMount() {
        this.props.fetchProducts();
        this.props.updateCartProductsCounter();
    }

    renderList(){
        const { productsList: { products } } = this.props;
        return products.map((product, index) => {
            return(
                <ItemLi key={product.id+index}>
                    <Product product={product} name={product.name} price={product.price} />
                    <FormComponent onSubmit={values => this.submit(values, product)} name={product.name}/>
                    <CustomLink pathLink={`${product_details}/${product.id}`} text={PRODUCT_DETAILS_LINK_PLACEHOLDER} />
                    <Button onClick={() => this.props.addProductToCart(product)} product={product} text={ADD_TO_CART} />
                </ItemLi>
            )
        })
    }

    render(){
        const { productsList: { isLoading, error }, cartCounter} = this.props;
        return(
            <>
                <TitlePage title={PRODUCTS_LIST_PAGE_NAME} />
                {isLoading && <Loading />}
                {error && <ErrorComponent />}
                <ul>
                    {this.renderList()}
                </ul>
                <CustomLink pathLink={home} text={HOME_LINK_PLACEHOLDER} />
                <br />
                <CustomLink pathLink={cart} text={CART_LINK_PLACEHOLDER} />
                <CartProductsCounter counter={cartCounter} />
            </>
        )
    }
}
