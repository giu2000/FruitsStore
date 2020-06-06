import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Home } from '../Home';
import { ProductsList } from '../ProductsList';
import { Cart } from '../Cart';
import { ProductDetails } from '../ProductDetails';
import { Layout } from '../Layout';

const App = ({store}) => (
  <Provider store={store}>
      <Router>
        <Route path="*" component={Layout} />
        <Route path="/" exact component={Home} />
        <Route path="/products_list" component={ProductsList} />
        <Route path="/cart" component={Cart} />
        <Route path="/product_details/:id" render={({ match }) => (<ProductDetails productId={match.params.id} />)} />
      </Router>   
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;


