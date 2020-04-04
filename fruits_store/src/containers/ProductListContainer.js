import {connect} from 'react-redux';
import getProduct from '../redux/actions/getProduct';
import getAllProducts from '../redux/actions/getAllProducts';
import ProductList from '../components/ProductList';
import addProductToCart from '../redux/actions/addProductToCart';




const mapDispatchToProps = dispatch => {
    return {
        getAllProducts: () =>  dispatch(getAllProducts('http://127.0.0.1:3001/products')),
        getProduct: productId => dispatch(getProduct(productId)),
        addProductToCart: product => dispatch(addProductToCart(product))
    }
} 

const mapStateToProps = state => {
    return {
        productsList: state.products
    } 
}

const ProductsListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default ProductsListContainer;