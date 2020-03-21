import {ProductListPage, ProductDetailsPage, BasketPage} from './pages';
import ProductsListContainer from './containers/ProductListContainer';
import React from 'react';

const App = () => {
  return (
    <div className='App'>
      <ProductsListContainer/>
    </div>
  )
}

export default App;

