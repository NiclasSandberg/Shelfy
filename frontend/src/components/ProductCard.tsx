import React from "react";
import { IProduct } from "../interfaces";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import { CircularProgressWithLabel } from "./CircularProgressWithLabel";

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


  return (
    <>
      <Link to={"/products/" + product.id}>
        <div>
          {product.name} <br />
          {product.dateOpened} <br />
          {product.expiryDate}
          <br />
          {daysUntilExpireFromToday < 30
            ? "it's still good for " + daysUntilExpireFromToday + " days"
            : "its still good for " +
            months +
            " months and " +
            daysAfterMonthsSubstraction +
            " days"}
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

          <br />
          <br />
          <br />
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
