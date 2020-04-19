import React from 'react';
import TitlePage from './TitlePage';
import PropTyepes from 'prop-types';
import Table from './Table';
import CustomLink from './CustomLink';
import { 
    home, 
    products_list, 
    cart 
} from '../utils/link';
import { 
    HOME_PAGE_NAME, 
    PRODUCTS_LIST_PAGE_NAME, 
    CART_PAGE_NAME, 
    PRODUCT_ID,
    PRODUCT_NAME,
    PRODUCT_DESCRIPTION,
    PRODUCT_PRICE,
    HOME_LINK_PLACEHOLDER,
    PRODUCTS_LIST_LINK_PLACEHOLDER,
    CART_LINK_PLACEHOLDER
} from '../utils/labels';

export default class ProductDetails extends React.Component{
    static propTypes = {
        product: PropTyepes.object.isRequired
    }

    componentDidMount(){
        this.props.fetchProductDetails()
    }
 
    render(){
        const { product } = this.props;
        const titles = [PRODUCT_ID, PRODUCT_NAME, PRODUCT_DESCRIPTION, PRODUCT_PRICE];
        return (
            <>
                <TitlePage title={"Product Details"} />
                <Table titles={titles} values={Object.values(product)} />
                <CustomLink pathLink={home} text={HOME_LINK_PLACEHOLDER} />
                <br />
                <CustomLink pathLink={products_list} text={PRODUCTS_LIST_LINK_PLACEHOLDER} />
                <br />
                <CustomLink pathLink={cart} text={CART_LINK_PLACEHOLDER} />
            </>
        )
    }
}
