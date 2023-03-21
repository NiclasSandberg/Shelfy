import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getProducts } from './api';
import { IProduct } from './interfaces';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getData();
  }, []) 

  const getData = async () => {
    const products = await getProducts();
    console.log({products});
    setProducts(products);
  }

  return (
    <>
    <h1>YO!!</h1> 
    {/*products.length === 0 && "Loading ..."*/}
    {products?.map(prod =>  <ProductCard product={prod} key={prod.id} /> )}
    </>
  );
}

export default App;
