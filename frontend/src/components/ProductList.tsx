import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../interfaces";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import { Button } from "@mui/material";

const ProductList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        getProducts().then(setProducts);
        // setProducts([{ id: "3", name: "", periodAfterOpening: "3" } as IProduct]);
    }, []);

    const getProducts = async (): Promise<IProduct[]> => {
        const response: Response = await fetch("http://localhost:8080/products");
        const data: IProduct[] = await response.json();
        return data;
    };

    return (
        <>
            {products.length === 0 && "Loading ..."}
            {products?.map((prod) => (
                <ProductCard product={prod} key={prod.id} />
            ))}

            <Link to={"/products/new"} style={{ textDecoration: 'none', color: "black" }}>
                <Button color="primary" variant="contained">
                    add new product
                </Button>
            </Link>
        </>
    );
};

export default ProductList;
