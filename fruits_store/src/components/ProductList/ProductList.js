import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from '../Loading';
import { ErrorComponent } from '../ErrorComponent';
import ItemLi from '../ItemLi';
import { AddToCartForm } from '../AddToCartForm';
import { product_details } from '../../utils/link';
import Navbar, { homeConfig, cartConfig } from '../Navbar';
import { ProductImage } from '../ProductImage';
import { Title } from '../Title';
import { Details } from '../Details';
import { Price } from '../Price';
import { ImageWithLink } from '../ImageWithLink';
import { ProductInfo } from '../ProductInfo';



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
            const { name, price, id } = product;
            return(
                <div className="item-li" className="four columns" style={{marginLeft:0}}>
                    <ItemLi key={product.id + index}>
                        <div>
                            <ProductImage>
                                <ImageWithLink
                                    /*src={require('../orange.jpg')}*/
                                   /*alt="photo"*/
                                    style={{ width: "30%", height: "30%" }}
                                    pathLink={`${product_details}/${id}`}
                                />
                            </ProductImage>
                        </div>
                        <div>
                            <ProductInfo>
                                <Title
                                    title={name}
                                />
                                <Details
                                    details="DETAILS TBD"
                                />
                                <Price
                                    price={price}
                                />
                                <AddToCartForm
                                    onSubmit={values => this.submit(values, product)}
                                    name={name}
                                />
                            </ProductInfo>
                        </div>
                    </ItemLi>
                </div>
            )
        })
    }

    render(){
        const { productsList: { isLoading, error } } = this.props;
        return(
            <div className='container'>  
                <div className='row'>
                    <Navbar firstConfig={homeConfig} secondConfig={cartConfig} />
                </div>
                {isLoading && <Loading />}
                {error && <ErrorComponent />}
                <div className='row'>
                    <ul>
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        )
    }
}
