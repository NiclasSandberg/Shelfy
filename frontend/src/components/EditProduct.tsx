import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../interfaces';
import ProductForm from './ProductForm';

const EditProduct = () => {
  const navigate = useNavigate();

  const handleEditedProduct = async (editedProduct: IProduct) => {
    console.log("entered handleNewProduct name: " + editedProduct.name)



    const createdProduct: IProduct = await fetch("http://localhost:8080/products",
      {
        method: "PUT",
        body: JSON.stringify(editedProduct),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(a => a.json()).catch(error => { console.log(error) });


    navigate("/products/" + createdProduct.id);
  }
  return (
    <>
      <ProductForm product={{}} onSubmit={handleEditedProduct} />
    </>
  )
}

export default EditProduct