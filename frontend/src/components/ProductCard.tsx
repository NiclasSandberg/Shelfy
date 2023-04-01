import React, { useEffect, useState } from "react";
import { ICategory, IProduct } from "../interfaces";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { CircularProgressWithLabel } from "./CircularProgressWithLabel";
//import joy circularprogress
import '../css/ProductCard.css';
import { expiryDateToText } from "../functions/expirydate-to-text";



interface ProductCardAttrs {
  product: IProduct;
  children?: JSX.Element;
  showFooter?: boolean;
}


const ProductCard = ({ product, children, showFooter = true }: ProductCardAttrs) => {
  const timeStrings = expiryDateToText(product);

  return (
    <>
      <div className="card-container">
        <Link to={"/products/" + product.id} style={{ textDecoration: 'none', color: "black" }}>
          <div className="card-header">
            <h3>{product.name}</h3>
            <div className="product-icon-container">

              <img src={product.category.imageUrl} alt="" className="product-icon" />
            </div>
          </div>
          <div className="card-body">
            <div>
              {children}
            </div>
          </div>
          {showFooter &&
            <div className="card-footer">
              <p>{timeStrings.long}
              </p>
              <div className="grey-circle-bar">
              </div>

              <CircularProgressWithLabel
                key={product.name}
                size="lg"
                variant="determinate"
                value={timeStrings.progress}
                sx={{ height: "5rem", width: "5rem", color: timeStrings.short === "0 D" ? "#d53636" : "#58b131" }}
                label={timeStrings.short}
                disableShrink={false}
              />

            </div>
          }
        </Link>
      </div>


    </>
  );
};

export default ProductCard;
