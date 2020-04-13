import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import React from 'react';
import propTypes from 'prop-types';
import App from '../App';
import Home from '../components/Home';
import ProductsListContainer from '../containers/ProductListContainer';
import CartContainer from '../containers/CartContainer';
import ProductListDetailsContainer from '../containers/ProductDetailsContainer';
import ProductDetailsContainer from "../containers/ProductDetailsContainer";

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/products_list" component={ProductsListContainer} />
            <Route path="/cart" component={CartContainer} />
            <Route path="/product_details/:id" render={({match}) => (<ProductDetailsContainer productId={match.params.id} />)} />
        </Router>
    </Provider>
)

Root.propTypes = {
    store: propTypes.object.isRequired
}

export default Root;

//<Route path="/:id?" component={ProductListDetailsContainer} />