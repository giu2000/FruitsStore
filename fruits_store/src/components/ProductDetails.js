import React from 'react';
import PropTyepes from 'prop-types';
import FormComponent from './FormComponent';
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

export default class ProductDetails extends React.Component{
    static propTypes = {
        product: PropTyepes.object.isRequired
    }

    componentDidMount(){
        this.props.fetchProductDetails()
    }
    submit = (values, product) => {
        this.props.addProductToCart(product, values);
    }
 
    render(){
        const { product } = this.props;
        return (
            <div className='container'>
                <div className="row">
                    <Navbar firstConfig={homeConfig} secondConfig={cartConfig} thirdConfig={productListConfig} />
                </div>
                <div className="row">
                    <div className="four columns">
                            <ProductImage>
                                <Image
                                    src={require('./orange.jpg')}
                                    style={{ width: "50%" }}
                                />
                            </ProductImage>
                    </div>
                    <div className="six columns" style={{outline: "1px solid black"}}>
                        <ProductInfo>
                                <Title title={product.name} />
                                <Details />
                                <Price price={product.price} />
                        </ProductInfo>
                        <div>
                            <FormComponent onSubmit={values => this.submit(values, product)}
                                name={product.name}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// <Table titles={titles} values={Object.values(product)} />
