import React from 'react';
import Button from './components/button/Button';
import ProductList from './components/productList/ProdutcList';
import ProductDetails from './components/productDetails/ProductDetails';
import Basket from './components/basket/basket';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="button button-primary" href='www.org.com'>Anchor button</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Button>Add To Cart</Button>
      <ProductList>ProductList</ProductList>
      <ProductDetails></ProductDetails>
      <Basket>Basket</Basket>
    </div>
  );
}

export default App;

