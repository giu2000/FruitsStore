import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Home } from '../Home';
import ProductsListContainer from '../../containers/ProductListContainer';
import { CartContainer } from'../../containers/CartContainer';
import { ProductDetailsContainer } from '../ProductDetails';
import { Layout } from '../Layout';

const App = ({store}) => (
  <Provider store={store}>
      <Router>
        <Route path="*" component={Layout} />
        <Route path="/" exact component={Home} />
        <Route path="/products_list" component={ProductsListContainer} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/product_details/:id" render={({ match }) => (<ProductDetailsContainer productId={match.params.id} />)} />
      </Router>   
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;


