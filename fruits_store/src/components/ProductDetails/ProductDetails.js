import React from 'react';
import PropTyepes from 'prop-types';

import Navbar, {
    homeConfig,
    cartConfig,
    productListConfig,
} from '../Navbar';

import { Price } from '../Price';
import { Title } from '../Title';
import { Details } from '../Details';
import { ProductInfo } from '../ProductInfo';
import { ProductImage } from '../ProductImage';
import { Image } from '../Image';
import { ProductAction } from '../ProductAction';
import { AddToCartForm } from '../AddToCartForm';

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
        const { name, price } = product;
        return (
            <div className='container'>
                <div className="navbar">
                    <div className="row">
                        <Navbar 
                            firstConfig={homeConfig} 
                            secondConfig={cartConfig} 
                            thirdConfig={productListConfig} 
                        />
                    </div>
                </div>
                <div className="product-details">
                    <div className="row">
                        <div className="four columns">
                            <ProductImage>
                                <Image
                                    alt={"potho"}
                                    style={{ width: "50%" }}
                                />
                            </ProductImage>
                        </div>
                        <div className="six columns">
                            <ProductInfo>
                                <Title 
                                    title={name}
                                />
                                <Details />
                                <Price 
                                    price={price}
                                />
                            </ProductInfo>
                            <ProductAction>
                                <AddToCartForm
                                    onSubmit={values => this.submit(values, product)}
                                    name={name}
                                />
                            </ProductAction>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

