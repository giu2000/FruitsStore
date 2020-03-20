import {connect} from 'react-redux';
import getAllProducts from '../redux/actions';
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