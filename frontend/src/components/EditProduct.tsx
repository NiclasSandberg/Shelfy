import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { IProduct } from '../interfaces';
import ProductForm from './ProductForm';

const EditProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<IProduct>();

  const navigate = useNavigate();

  const getProductById = async (): Promise<IProduct> => {
    const response: Response = await fetch(
      "http://localhost:8080/products/" + productId
    );
    const data: IProduct = await response.json();

    return data;
  };


  const handleEditedProduct = async (editedProduct: IProduct) => {
    const createdProduct: IProduct = await fetch("http://localhost:8080/products/" + productId,
      {
        method: "PUT",
        body: JSON.stringify(editedProduct),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(a => a.json()).catch(error => { console.log(error) });


    navigate("/products/" + productId);
  }
  useEffect(() => {
    getProductById().then(setProduct);
  }, []);

  return (
    <>
      {product && <ProductForm product={product} onSubmit={handleEditedProduct} />}
    </>
  )
}

export default EditProduct