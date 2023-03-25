import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { IProduct } from '../interfaces';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';
import cream from '../images/cream-tube-2.png';
import makeup from '../images/makeup-eyelash.png';

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
    // const handler = () => {
    //     console.log("whatever")
    // };

    return (
        <>  

            <h1>Shelfy</h1>
            {products.length === 0 && "Loading ..."}
            {products?.map(prod => <ProductCard product={prod} key={prod.id} />)}
            <img src={cream} style={{width:"150px"}}alt="" />
            <img src={makeup} style={{width:"150px"}}alt="" />
            <Link to={'/products/new'}><button>Add new product</button></Link>
            

         
            
        </>
    );
}

export default ProductList