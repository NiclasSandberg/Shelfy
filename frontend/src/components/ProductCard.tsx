import React from 'react'
import { IProduct } from '../interfaces'
import { Link } from 'react-router-dom';

interface ProductCardAttrs {
  product: IProduct
}

const ProductCard = ({ product }: ProductCardAttrs) => {

  const date1 = new Date(product.dateOpened);
  const date2 = new Date(product.expiryDate);

  const msBetweenDates = date2.getTime() - date1.getTime();

  let daysUntilExpire = Math.ceil(msBetweenDates / (1000 * 60 * 60 * 24));
  let months = Math.ceil(daysUntilExpire / 31);
  let daysAfterMonthsSubstraction = daysUntilExpire - (months * 30);

  console.log("difference in days: " + Math.ceil(msBetweenDates / (1000 * 60 * 60 * 24)))
  console.log("months left: " + months);


  return (
    <>
      <Link to={'/products/' + product.id} >
        <div>
          {product.name} <br />
          {product.dateOpened} <br />
          {product.expiryDate}<br />

          {daysUntilExpire < 30 ? "it's still good for " + daysUntilExpire + " days" : "its still good for " + months + " months and " + daysAfterMonthsSubstraction + " days"}
          {/* its still good for {months} months and {daysAfterMonthsSubstraction} days. */}
          <br />
          <br />
          <br />

        </div>
      </Link>
    </>
  )
}



export default ProductCard