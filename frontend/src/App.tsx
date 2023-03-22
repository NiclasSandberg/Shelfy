import React, { useEffect, useState } from 'react';
import './css/App.css';
import { getProducts } from './api';
import { IProduct } from './interfaces';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts();
  }, [])

  // const getData = async () => {
  //   const products = await getProducts();
  //   console.log({products});
  //   setProducts(products);
  // }

  const getProducts = async () => {
    const response: Response = await fetch("http://localhost:8080/products");
    const data: IProduct[] = await response.json();

    setProducts(data);
    console.log("THE DATA IS HERE " + data)
  }


  return (
    <>
      <h1>YO!!</h1>
      {products.length === 0 && "Loading ..."}
      {products?.map(prod => <ProductCard product={prod} key={prod.id} />)}
    </>
  );
}

export default App;
