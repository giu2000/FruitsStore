import React from 'react';
import PropTyepes from 'prop-types';

import Navbar, {
    homeConfig,
    cartConfig,
    productListConfig,
} from './Navbar';

import { Price } from './Price';
import { Title } from './Title';
import { Details } from './Details';
import { ProductInfo } from './ProductInfo';
import { ProductImage } from './ProductImage';
import { Image } from './Image';
import { ProductAction } from './ProductAction';
import { AddToCartForm } from './AddToCartForm';

export default class ProductDetails extends React.Component{
    static propTypes = {
        product: PropTyepes.object.isRequired
    }
    componentDidMount(){
        this.props.fetchProductDetails();
        this.props.fetchCartProducts();
    }
    submit = (values, product) => {
        this.props.addProductToCart(product, values);
    }
 
    render(){
        const { product } = this.props;
        return (
            <div className='container'>
                <div className="navbar">
                    <div className="row">
                        <Navbar firstConfig={homeConfig} secondConfig={cartConfig} thirdConfig={productListConfig} />
                    </div>
                </div>
                <div className="product-details">
                    <div className="row">
                        <div className="four columns" style={{ outline: "1px solid red" }}>
                            <ProductImage>
                                <Image
                                    alt={"potho"}
                                    style={{ width: "50%" }}
                                />
                            </ProductImage>
                        </div>
                        <div className="six columns" style={{ outline: "1px solid red" }}>
                            <ProductInfo>
                                <Title title={product.name} />
                                <Details />
                                <Price price={product.price} />
                            </ProductInfo>
                            <ProductAction>
                                <AddToCartForm
                                    onSubmit={values => this.submit(values, product)}
                                    name={product.name}
                                />
                            </ProductAction>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

