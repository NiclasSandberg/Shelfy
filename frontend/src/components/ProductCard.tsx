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
  console.log(fullShelflifeInMs);
  const progressShelflifeInMs = fullShelflifeInMs - shelflifeLeftFromTodayInMs;
  const percentageToShow = Math.ceil(100 - (shelflifeLeftFromTodayInMs / (fullShelflifeInMs / 100)));
  console.log("percentage to show: "+percentageToShow)

  let daysUntilExpire = Math.ceil(shelflifeLeftFromTodayInMs / (1000 * 60 * 60 * 24));
  let months = Math.ceil(daysUntilExpire / 31);
  let daysAfterMonthsSubstraction = daysUntilExpire - (months * 30);

  console.log("difference in days: " + Math.ceil(shelflifeLeftFromTodayInMs / (1000 * 60 * 60 * 24)))
  console.log("months left: " + months);

  // 0 = day opened == today // 100% shelflife (date of expiry - date opened )
// 100 = 0 days left
// 12M = 365    2022-12-31(opened) ? 2023-07-21 (expiry date)
//  
  return (
    <>
      <Link to={'/products/' + product.id} >
        <div>
          {product.name} <br />
          {product.dateOpened} <br />
          {product.expiryDate}<br />

          {daysUntilExpire < 30 ?
          "it's still good for " + daysUntilExpire + " days" :
          "its still good for " + months + " months and " + daysAfterMonthsSubstraction + " days"}

          <CircularProgress key={product.name} size="lg" determinate value={percentageToShow > 95 ? 92 : percentageToShow }>
            {daysUntilExpire < 30 ? daysUntilExpire  + " D" : months + " M"}
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