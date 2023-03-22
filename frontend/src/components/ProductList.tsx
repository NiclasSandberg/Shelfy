import React, { useEffect, useState } from 'react'
import { IProduct } from '../interfaces';
import ProductCard from './ProductCard';

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
            <h1>YO!!</h1>
            {products.length === 0 && "Loading ..."}
            {products?.map(prod => <ProductCard product={prod} key={prod.id} />)}
        </>
    );
}

export default ProductList