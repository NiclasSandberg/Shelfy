import { Button, Grid } from "@mui/material";
import { months } from "moment";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { expiryDateToText } from "../functions/expirydate-to-text";
import { IProduct } from "../interfaces";
import { CircularProgressWithLabel } from "./CircularProgressWithLabel";
import ProductCard from "./ProductCard";
import { useAuth } from "../context/auth-context";

const ProductView = () => {
    const { token } = useAuth();
    const { productId } = useParams();
    const [product, setProduct] = useState<IProduct>();
    const navigate = useNavigate();
    const timeStrings = product ? expiryDateToText(product) : null;

    const getProductById = async () => {
        const response: Response = await fetch(
            "http://localhost:8080/products/" + productId,
            {
                headers: {
                    "Authorization": "Bearer " + token,
                }
            }

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
                headers: {
                    "Authorization": "Bearer " + token,
                }
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
                            <Grid item xs={9}>
                                {product.description}
                            </Grid>
                            <Grid item xs={7}>
                                Product opened:
                            </Grid>
                            <Grid item xs={5}>
                                {product.dateOpened}
                            </Grid>
                            <Grid item xs={7}>
                                Category:
                            </Grid>
                            <Grid item xs={5}>
                                {product.category.name}
                            </Grid>
                            <Grid item xs={7}>
                                Product expires:
                            </Grid>
                            <Grid item xs={5}>
                                {product.expiryDate}
                            </Grid>
                            <Grid style={{ marginBottom: "1rem" }} item xs={12}>
                                This product is {timeStrings?.long?.toLocaleLowerCase()}.
                            </Grid>
                        </Grid>
                    </>
                </ProductCard>
            </>}

            <Link to={'/products/' + productId + '/edit'}>
                <button>Edit product</button>
            </Link>
            <button onClick={deleteProductById}>Delete product</button>
        </>
    );
};

export default ProductView;
