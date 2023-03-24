import React from 'react'
import { IProduct } from '../interfaces'
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/joy/CircularProgress';

interface ProductCardAttrs {
  product: IProduct
}

const ProductCard = ({ product }: ProductCardAttrs) => {


  function datediff(date:Date) {
    let d1 = date;
    let d2 = now = new Date();
    if (d2.getTime() < d1.getTime()) {
      d1 = d2;
      d2 = date;
    }
    let yd = d1.getFullYear();
    let yn = d2.getFullYear();
    let years = yn - yd;
    let md = d1.getMonth();
    let mn = d2.getMonth();
    let months = mn - md;
    if (months < 0) {
      years--;
      months = 12 - md + mn;
    }
    let dd = d1.getDate();
    let dn = d2.getDate();
    let days = dn - dd;
    if (days < 0) {
      months--;
      // figure out how many days there are in the last month
      d2.setMonth(mn, 0);
      days = d2.getDate() - dd + dn;
    }
    let weeks = Math.floor(days / 7);
    days = days % 7;
    if (years > 0) return years + ' years' + (months > 0 ? ' and ' + months + ' months' : '');
    if (months > 0) return months + ' months' + (weeks > 0 ? ' and ' + weeks + ' weeks' : '');
    if (weeks > 0) return weeks + ' weeks' + (days > 0 ? ' and ' + days + ' days' : '');
    return days + ' days';
 }

  const today = new Date();
  const expiryDate = new Date(product.expiryDate);
  const productOpenedAt = new Date(product.dateOpened);

  const shelflifeLeftFromTodayInMs = expiryDate.getTime() - today.getTime();
  const fullShelflifeInMs = expiryDate.getTime() - productOpenedAt.getTime();
  console.log(fullShelflifeInMs);
  const percentageToShow = Math.ceil(100 - (shelflifeLeftFromTodayInMs / (fullShelflifeInMs / 100)));
  console.log("percentage to show: "+percentageToShow)

  let daysUntilExpireFromToday = Math.floor(shelflifeLeftFromTodayInMs / (1000 * 60 * 60 * 24));
  let months = Math.floor(daysUntilExpireFromToday / 30);
  let daysAfterMonthsSubstraction = daysUntilExpireFromToday % months;
  console.log("remainder days (modulo)" + daysAfterMonthsSubstraction)

  console.log("difference in days: " + Math.ceil(shelflifeLeftFromTodayInMs / (1000 * 60 * 60 * 24)))
  console.log("months left: " + months);



  return (
    <>
      <Link to={'/products/' + product.id} >
        <div>
          {product.name} <br />
          {product.dateOpened} <br />
          {product.expiryDate}<br />
 
          {datediff(product.expiryDate)}
          
{/* 
          {daysUntilExpireFromToday < 30 ?
          "it's still good for " + daysUntilExpireFromToday + " days" :
          "its still good for " + months + " months and " + daysAfterMonthsSubstraction + " days"} */}

          <CircularProgress key={product.name} size="lg" determinate value={percentageToShow > 95 && percentageToShow < 100 ? 92 : percentageToShow }>
            {daysUntilExpireFromToday < 30 ? daysUntilExpireFromToday  + " D" : months + " M"}
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