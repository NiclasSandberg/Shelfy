import { Button, Grid } from "@mui/material";
import { months } from "moment";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { expiryDateToText } from "../functions/expirydate-to-text";
import { IProduct } from "../interfaces";
import { CircularProgressWithLabel } from "./CircularProgressWithLabel";
import ProductCard from "./ProductCard";

const ProductView = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState<IProduct>();
    const navigate = useNavigate();
    const timeStrings = product ? expiryDateToText(product) : null;

    const getProductById = async () => {
        const response: Response = await fetch(
            "http://localhost:8080/products/" + productId
        );
        const data: IProduct = await response.json();

        setProduct(data);
    };

    const deleteProductById = async () => {
        console.log("entered deleteProductById name: " + productId);

        const response = await fetch(
            "http://localhost:8080/products/" + productId,
            {
                method: "DELETE",
            }
        );

        navigate("/");
    };

    useEffect(() => {
        getProductById();
    }, []);



    return (
        <>

            {product && <>
                <ProductCard product={product} showFooter={false}>
                    <>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                {product.description}
                            </Grid>
                            <Grid item xs={6}>
                                Product was opened:
                            </Grid>
                            <Grid item xs={6}>
                                {product.dateOpened}
                            </Grid>
                            <Grid item xs={6}>
                                Category:
                            </Grid>
                            <Grid item xs={6}>
                                {product.category.name}
                            </Grid>
                            <Grid item xs={6}>
                                This product expires:
                            </Grid>
                            <Grid item xs={6}>
                                {product.expiryDate}
                            </Grid>
                            <Grid item xs={12}>
                                This product is {timeStrings?.long}.
                            </Grid>
                        </Grid>
                    </>
                </ProductCard>
            </>}

            <Link to={'/products/' + productId + '/edit'}>
                <button>Edit product</button>
            </Link>
            <button onClick={deleteProductById}>Delete product</button>

            <Link to={"/"}>
                <button>🏠</button>
            </Link>
        </>
    );
};

export default ProductView;
