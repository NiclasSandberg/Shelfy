import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../interfaces';
import ProductForm from './ProductForm';

const CreateProduct = () => {
  // const navigate = useNavigate();

  const handleNewProduct = async (newProduct: IProduct) => {
          const createdProduct: IProduct = await fetch("http://localhost:8080/products",
              {
                  method: "POST", body: JSON.stringify({name:"lol"}), headers: {
                      "Content-Type": "application/json"
                  }
              }).then(a => a.json()).catch(error => { console.log(error) });


          // navigate("/products/" + createdProduct.id);
  }
  return (
    <>
    <ProductForm product={{}} onSubmit={handleNewProduct}  />
    </>
  )
}

export default CreateProduct