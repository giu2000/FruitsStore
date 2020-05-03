import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Button from './Button';
import CustomLink from './CustomLink';
import Loading from './Loading';
import ErrorComponent from './ErrorComponent';
import ItemLi from './ItemLi';
import CartProductsCounter from './CartProductsCounter';
import FormComponent from './FormComponent';
import { product_details, home, cart } from '../utils/link';
import {    
    PRODUCT_DETAILS_LINK_PLACEHOLDER 
} from '../utils/labels';
import Navbar, { homeConfig, cartConfig } from './Navbar';



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
                
                <ItemLi  key={product.id+index}>
                    <Product product={product} name={product.name} price={product.price} />
                    <CustomLink pathLink={`${product_details}/${product.id}`} 
                                text={PRODUCT_DETAILS_LINK_PLACEHOLDER} 
                                style={{ outline: '1px solid red', margin: '1%' }} 
                    />
                    <FormComponent onSubmit={values => this.submit(values, product)} 
                                    name={product.name}
                    />
                </ItemLi>
            )
        })
    }

    render(){
        const { productsList: { isLoading, error }, cartCounter} = this.props;
        return(
            <div className='container'>  
                <div className='row'>
                    <Navbar firstConfig={homeConfig} secondConfig={cartConfig} />
                </div>
                {isLoading && <Loading />}
                {error && <ErrorComponent />}
                <CartProductsCounter counter={cartCounter} />
                <div className='row'>
                    <ul>
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        )
    }
}
