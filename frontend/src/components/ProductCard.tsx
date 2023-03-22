import React from 'react'
import { IProduct } from '../interfaces'

interface ProductCardAttrs {
  product: IProduct
}

const ProductCard = ({ product }: ProductCardAttrs) => {
  return (
    <>
      <div>ProductCard</div>
      {product.name} <br />
      {product.dateOpened}
      <br /><br />
    </>
  )
}

export default ProductCard