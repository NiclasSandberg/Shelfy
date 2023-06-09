import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory, IProduct } from "../interfaces";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import { Button } from "@mui/material";
import Filter from "./Filter";
import { expiryDateToText } from "../functions/expirydate-to-text";
import LoginButton from "./Login";
import { useAuth } from "../context/auth-context";
import LogoutButton from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
import '../css/ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | undefined>(0);
    const [daysLeft, setDaysLeft] = useState<number | undefined>();
    const { token } = useAuth();
    const { isAuthenticated } = useAuth0();


    useEffect(() => {
        getProducts().then(setProducts);

        setCategories([
            { id: 0, name: "All" },
            { id: 1, name: "Makeup" },
            { id: 2, name: "Skincare" },
            { id: 3, name: "Hair care" },
            { id: 4, name: "Medicine" },
            { id: 5, name: "Towels" },
            { id: 6, name: "Miscellaneous" }
        ]);

    }, []);

    const getProducts = async (): Promise<IProduct[]> => {
        const response: Response = await fetch("/api/products", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            }
        })
        const data: IProduct[] = await response.json();
        return data;
    };

    return (
        <>
            <Filter
                categories={categories}
                filterValue={selectedCategoryId}
                setFilterValue={setSelectedCategoryId}
            />

            {
                products
                    .filter(p => !(selectedCategoryId != undefined && selectedCategoryId > 0) || p.category.id === selectedCategoryId)
                    .sort((a, b) => {
                        return Date.parse(a.expiryDate) - Date.parse(b.expiryDate);
                    })
                    .map(p => <ProductCard
                        product={p} key={p.id} />)
            }
            <div className="buttons-section">
            <Link to={"/products/new"} style={{ textDecoration: 'none', color: "black" }}>
                <Button color="primary" variant="contained">
                    add new product
                </Button>
            </Link>
            
            {isAuthenticated && <LogoutButton />} 
            </div>
        </>
    );
};

export default ProductList;
