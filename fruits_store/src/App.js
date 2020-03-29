import ProductsListContainer from './containers/ProductListContainer';
import React from 'react';
import ProductDetailsContainer from './containers/ProductDetailsContainer';
import CartContainer from './containers/CartContainer';


const App = () => {
  return (
    <div className='App'>
      <ProductsListContainer/>
      <hr />
      <ProductDetailsContainer />
      <hr />
      <CartContainer />
    </div>
  )
}

export default App;

