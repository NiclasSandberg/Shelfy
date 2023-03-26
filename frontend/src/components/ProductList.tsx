import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { IProduct } from '../interfaces';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';
import { Button } from "@mui/material";

const ProductList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        getProducts();
    }, [])


    const getProducts = async () => {
        const response: Response = await fetch("http://localhost:8080/products");
        const data: IProduct[] = await response.json();

        setProducts(data);
        console.log("THE DATA IS HERE " + data)
    }

    return (
        <>

            {products.length === 0 && "Loading ..."}
            {products?.map(prod => <ProductCard product={prod} key={prod.id} />)}

            <Link to={'/products/new'}><Button color="primary" variant="contained">Add new product</Button></Link>

        </>
    );
}

export default ProductList