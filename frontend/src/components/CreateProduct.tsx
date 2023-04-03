import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../interfaces';
import ProductForm from './ProductForm';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuth } from '../context/auth-context';

const CreateProduct = () => {
  const { token } = useAuth();

  const navigate = useNavigate();



  const handleNewProduct = async (newProduct: IProduct) => {
    console.log("entered handleNewProduct name: " + newProduct.name)



    const createdProduct: IProduct = await fetch("/api/products",
      {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
        }
      }).then(a => a.json()).catch(error => { console.log(error) });

    navigate("/products/" + createdProduct.id);
  }
  return (
    <>
      <ProductForm product={{}} onSubmit={handleNewProduct} />
    </>
  )
}

export default CreateProduct