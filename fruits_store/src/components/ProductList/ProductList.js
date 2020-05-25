import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from '../Loading';
import { ErrorComponent } from '../ErrorComponent';
import { AddToCartForm } from '../AddToCartForm';
import { product_details } from '../../utils/link';
import { ProductInfo } from '../ProductInfo';
import { ImageWithLink } from '../ImageWithLink';

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
                    <div key={product.id + index}>
                        <div>
                            <ImageWithLink
                                src={require('../../orange.jpg')}
                                alt="photo"
                                style={{ width: "30%", height: "30%" }}
                                pathLink={`${product_details}/${id}`}
                            />
                        </div>
                        <ProductInfo
                            title={name}
                            details={'TBD'}
                            price={price}
                        />
                        <AddToCartForm
                            onSubmit={values => this.submit(values, product)}
                            name={name}
                        />
                     
                    </div>
                </div>
            )
        })
    }

    render(){
        const { productsList: { isLoading, error } } = this.props;
        return(
            <div className='container'>  
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
