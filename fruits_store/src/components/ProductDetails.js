import React from 'react';
import TitlePage from './TitlePage';
import PropTyepes from 'prop-types';
import Table from './Table';
import CustomLink from './CustomLink';

export default class ProductDetails extends React.Component{
    static propTypes = {
        product: PropTyepes.object.isRequired
    }

    componentDidMount(){
        this.props.fetchProductDetails()
    }
 
    render(){
        const { product } = this.props;
        const titles = ['ID', 'Name', 'Description', 'Price'];
        return (
            <>
                <TitlePage title={"Product Details"} />
                <Table titles={titles} values={Object.values(product)} />
                <CustomLink pathLink={'/'} text={"HOME"} />
                <br />
                <CustomLink pathLink={'/products_list'} text={"PRODUCTS LIST"} />
                <br />
                <CustomLink pathLink={'/cart'} text={"CART"} />
            </>
        )
    }
}
