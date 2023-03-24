import React from 'react'
import { IProduct } from '../interfaces'
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/joy/CircularProgress';

interface ProductCardAttrs {
  product: IProduct
}

const ProductCard = ({ product }: ProductCardAttrs) => {

  const today = new Date();

  const expiryDate = new Date(product.expiryDate);
  const productOpenedAt = new Date(product.dateOpened);

  const shelflifeLeftFromTodayInMs = expiryDate.getTime() - today.getTime();
  const fullShelflifeInMs = expiryDate.getTime() - productOpenedAt.getTime();
  const percentageToShow = 100 - (shelflifeLeftFromTodayInMs / (fullShelflifeInMs / 100));

  let daysUntilExpireFromToday = Math.floor(shelflifeLeftFromTodayInMs / (1000 * 60 * 60 * 24));
  let months = Math.floor(daysUntilExpireFromToday / 30);
  let daysAfterMonthsSubstraction = daysUntilExpireFromToday % 30;

  return (
    <>
      <Link to={'/products/' + product.id} >
        <div>
          {product.name} <br />
          {product.dateOpened} <br />
          {product.expiryDate}<br />

          {daysUntilExpireFromToday < 30 ?
            "it's still good for " + daysUntilExpireFromToday + " days" :
            "its still good for " + months + " months and " + daysAfterMonthsSubstraction + " days"}

          <CircularProgress key={product.name} size="lg" determinate value={percentageToShow > 95 && percentageToShow < 100 ? 92 : percentageToShow}>
            {daysUntilExpireFromToday < 30 ? daysUntilExpireFromToday + " D" : months + " M"}
          </CircularProgress>
          <br />
          <br />
          <br />

        </div>
      </Link>
    </>
  )
}



export default ProductCard