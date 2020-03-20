import {connect} from 'react-redux';
import React from 'react';
import getAllProducts from '../redux/actions/action.js';

import ProductList from '../components/ProductList';

const mapDispatchToProps = dispatch => {
    return {
        getAllProducts: () =>  dispatch(getAllProducts())
    }
} 

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        products: state.products
    } 
}

const ProductsListConatiner = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default ProductsListConatiner;