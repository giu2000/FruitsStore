import {ProductListPage, ProductDetailsPage, BasketPage} from './pages';
import ProductsListContainer from './containers/ProductListContainer';
import React from 'react';
import ProductDetailsContainer from './containers/ProductDetailsContainer';

const App = () => {
  return (
    <div className='App'>
      <ProductsListContainer/>
      <hr></hr>
      <ProductDetailsContainer />
    </div>
  )
}

export default App;

