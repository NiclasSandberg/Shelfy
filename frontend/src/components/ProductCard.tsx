import React from 'react'
import { IProduct } from '../interfaces'

interface ProductCardAttrs {
    product: IProduct
}

const ProductCard = ({ product } : ProductCardAttrs) => {
  return (
    <>
    <div>ProductCard</div>
    {product.dateOpened}
    </>
  )
}

export default ProductCard