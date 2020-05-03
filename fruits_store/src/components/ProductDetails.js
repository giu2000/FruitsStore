import React from 'react';
import PropTyepes from 'prop-types';
import FormComponent from './FormComponent';

import Navbar, {
    homeConfig,
    cartConfig,
    productListConfig,
} from './Navbar';

import { 
    PRODUCT_ID,
    PRODUCT_NAME,
    PRODUCT_DESCRIPTION,
    PRODUCT_PRICE,
} from '../utils/labels';

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
        const titles = [PRODUCT_ID, PRODUCT_NAME, PRODUCT_DESCRIPTION, PRODUCT_PRICE];
        return (
            <>
                
                <div className='container'>
                    <div className="row">
                        <Navbar firstConfig={homeConfig} secondConfig={cartConfig} thirdConfig={productListConfig} />
  
                    </div>
                    <div className="row">
                        <div className="four columns" style={{margin: "5%", outline: "1px solid black"}}>
                            <img src={require('./orange.jpg')} style={{ width: "50%"}} />
                        </div>
                        <div className="six columns" style={{outline: "1px solid black"}}>
                            <div>
                                <b>{product.name}</b>
                            </div>
                            <div>
                                Details TBD
                            </div>
                            <div>
                                ${product.price}
                            </div>
                            <div>
                                <FormComponent onSubmit={values => this.submit(values, product)}
                                    name={product.name}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </>
        )
    }
}


// <Table titles={titles} values={Object.values(product)} />