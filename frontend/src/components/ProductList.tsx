import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory, IProduct } from "../interfaces";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import { Button } from "@mui/material";
import Filter from "./Filter";

const ProductList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | undefined>(undefined);

    useEffect(() => {
        getProducts().then(setProducts);
        // setProducts([{ id: "3", name: "", periodAfterOpening: "3" } as IProduct]);
        setCategories([
            { id: 1, name: "Makeup" },
            { id: 2, name: "Skincare" },
            { id: 3, name: "Hair care" },
            { id: 4, name: "Medicine" },
            { id: 5, name: "Towels" },
            { id: 6, name: "Miscellaneous" }
        ]);
        
    }, []);

    const getProducts = async (): Promise<IProduct[]> => {
        const response: Response = await fetch("http://localhost:8080/products");
        const data: IProduct[] = await response.json();
        return data;
    };

        console.log(products.filter(prod => prod.category.id === selectedCategoryId));
        console.log()
    return (
        <>
            <Filter
                categories={categories}
                filterValue={selectedCategoryId}
                setFilterValue={setSelectedCategoryId}
            />
{/* 
            {products?.map((prod) => {if (prod.category.id === selectedCategoryId){<ProductCard product={prod} key={prod.id} />}} )} */}
            
            {/* Filter products and then map..*/}

            {/*
                products.filter((product) => {
                    if (selectedCategoryId === 'all') {
                        return true;
                    }
                    return product.id === selectedCategoryId
                }).map(s => {
                    <ProductCard product={undefined} />
            
                        })*/} 

        
{
          selectedCategoryId
            ?products.filter( p => p.category.id === selectedCategoryId).map(p =>   <ProductCard
                product={p}
              />
            
            ) 
            : products.map( p =>
                <ProductCard
              product={p}
            />)
        }                
            {/*
            products?.map((prod) => (
                <ProductCard product={prod} key={prod.id} />
            ))*/}

            <Link to={"/products/new"} style={{ textDecoration: 'none', color: "black" }}>
                <Button color="primary" variant="contained">
                    add new product
                </Button>
            </Link>
        </>
    );
};

export default ProductList;
