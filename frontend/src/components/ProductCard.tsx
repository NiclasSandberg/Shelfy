import React from 'react'
import { IProduct } from '../interfaces'

interface ProductCardAttrs {
    product: IProduct
}

const ProductCard = ({ product } : ProductCardAttrs) => {
  return (
    <>
    <ul>Expires in: {product.daysUntilExpiry} months and 5 days</ul>
    </>
  )
}



export default ProductCard