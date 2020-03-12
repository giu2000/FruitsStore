import React from 'react';
import Button from './components/button/Button';
import ProductList from './components/productList/ProdutcList';
import ProductDetails from './components/productDetails/ProductDetails';
import Basket from './components/basket/basket';

function App() {
  return (
    <div className="App">
      <Button/>
      <ProductList />
      <ProductDetails />
      <Basket />
    </div>
  );
}

export default App;

