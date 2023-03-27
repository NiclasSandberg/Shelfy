import React, { useEffect, useState } from "react";
import { ICategory, IProduct } from "../interfaces";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { CircularProgressWithLabel } from "./CircularProgressWithLabel";
//import joy circularprogress
import '../css/ProductCard.css';
import makeup from '../images/category-images/skincare.png'

interface ProductCardAttrs {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardAttrs) => {
  const today = new Date();

  const expiryDate = new Date(product.expiryDate);
  const productOpenedAt = new Date(product.dateOpened);

  const shelflifeLeftFromTodayInMs = expiryDate.getTime() - today.getTime();
  const fullShelflifeInMs =
    expiryDate.getTime() - productOpenedAt.getTime() || 1;
  const percentageToShow =
    100 - shelflifeLeftFromTodayInMs / (fullShelflifeInMs / 100);

  const daysUntilExpireFromToday = Math.floor(
    shelflifeLeftFromTodayInMs / (1000 * 60 * 60 * 24)
  );
  const months = Math.floor(daysUntilExpireFromToday / 30);
  const daysAfterMonthsSubstraction = daysUntilExpireFromToday % 30;

  const progress =
    percentageToShow > 95 && percentageToShow < 100
      ? 92
      : Math.min(percentageToShow, 100);


  console.log(product.category.imageUrl)

  return (
    <>
      <div className="card-container">
        <Link to={"/products/" + product.id} style={{ textDecoration: 'none', color: "black" }}>
          <div className="card-header">
            <h3>{product.name}</h3>

            <div className="product-icon-container">

              <img src={makeup} alt="" className="product-icon" />
            </div>
          </div>
          <div className="card-footer">
            <p>{daysUntilExpireFromToday < 30
              ? "still good for " + daysUntilExpireFromToday + " days"
              : "still good for " +
              months +
              " months and " +
              daysAfterMonthsSubstraction +
              " days"}
            </p>
            <CircularProgressWithLabel

              key={product.name}
              size="lg"
              variant="determinate"
              value={progress}
              sx={{ height: "5rem", width: "5rem" }}
              label={daysUntilExpireFromToday < 30
                ? daysUntilExpireFromToday + " D"
                : months + " M"}
            />
          </div>
        </Link>
      </div>


    </>
  );
};

export default ProductCard;
