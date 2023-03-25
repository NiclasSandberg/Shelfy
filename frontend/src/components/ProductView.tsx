import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IProduct } from '../interfaces';

const ProductView = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState<IProduct>();
    const navigate = useNavigate();

    const getProductById = async () => {
        const response: Response = await fetch("http://localhost:8080/products/" + productId);
        const data: IProduct = await response.json();

        setProduct(data);

    }

    useEffect(() => {
        getProductById();

    }, [])



    return (

        <>
            <div>{product?.name}</div>
            {product?.id}<br />
            {product?.description}

            <Link to={'/products/edit'}><button>Edit product</button></Link>
            <button>Delete product</button>


        </>
    )
}

export default ProductView