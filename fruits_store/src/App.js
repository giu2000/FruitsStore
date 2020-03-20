import {ProductListPage, ProductDetailsPage, BasketPage} from './pages';
import ProductsListConatiner from './containers/ProductListContainer';
import React from 'react';

export default function App() {
  return (
    <div className="App">
      <ProductsListConatiner />
      {/* <hr />
      <ProductDetailsPage />
      <hr />
      <Basketpage />  */}
    </div>
  );
}


//sostituire i componenti con i container component