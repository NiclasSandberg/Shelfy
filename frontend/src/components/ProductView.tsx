import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../interfaces";

const ProductView = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState<IProduct>();
    const navigate = useNavigate();

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
            <div>
                {product?.name} <br />
                {product?.description} <br />
                Category: {product?.category.categoryName}
                <br />
                Date opened: {product?.dateOpened}
                <br />
                Product expires: {product?.expiryDate}
                <br />
                Period after opening "shelflife after opening": {product?.periodAfterOpening} months
                <br />
            </div>
            <Link to={'/products/' + productId + '/edit'}>
                <button>Edit product</button>
            </Link>
            <button onClick={deleteProductById}>Delete product</button>
        </>
    );
};

export default ProductView;
