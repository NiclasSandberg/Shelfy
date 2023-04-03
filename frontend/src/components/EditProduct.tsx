import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { IProduct } from '../interfaces';
import ProductForm from './ProductForm';
import { useAuth } from '../context/auth-context';

const EditProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const { token } = useAuth();

  const navigate = useNavigate();

  const getProductById = async (): Promise<IProduct> => {
    const response: Response = await fetch(
      "/api/products/" + productId,
      {
        headers: {
            "Authorization": "Bearer " + token,
        }
    }
    );
    const data: IProduct = await response.json();

    return data;
  };


  const handleEditedProduct = async (editedProduct: IProduct) => {
    const createdProduct: IProduct = await fetch("/api/products/" + productId,
      {
        method: "PUT",
        body: JSON.stringify(editedProduct),
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
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