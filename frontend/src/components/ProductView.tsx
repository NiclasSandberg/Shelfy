import { Button, Grid } from "@mui/material";
import { months } from "moment";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { expiryDateToText } from "../functions/expirydate-to-text";
import { IProduct } from "../interfaces";
import { CircularProgressWithLabel } from "./CircularProgressWithLabel";
import ProductCard from "./ProductCard";
import { useAuth } from "../context/auth-context";
import '../css/ProductView.css';


const ProductView = () => {
    const { token } = useAuth();
    const { productId } = useParams();
    const [product, setProduct] = useState<IProduct>();
    const navigate = useNavigate();
    const timeStrings = product ? expiryDateToText(product) : null;

    const getProductById = async () => {
        const response: Response = await fetch(
            "/api/products/" + productId,
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
            "/api/products/" + productId,
            {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer " + token,
                }
            }
        );

        navigate("/products");
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
                                {timeStrings?.long}
                            </Grid>
                        </Grid>
                    </>
                </ProductCard>
            </>}
<div className="buttons-section-view-page">

            <Button onClick={deleteProductById} color="primary" variant="contained">Delete</Button>
            <Link to={'/products/' + productId + '/edit'} style={{ textDecoration: 'none', color: "black" }}>
                <Button color="primary" variant="contained">
                Edit
                </Button>
                
            </Link>
</div>
        </>
    );
};

export default ProductView;
