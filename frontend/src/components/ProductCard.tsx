import React from 'react'
import { IProduct } from '../interfaces'
import { Link } from 'react-router-dom';

interface ProductCardAttrs {
  product: IProduct
}

const ProductCard = ({ product }: ProductCardAttrs) => {
  return (
    <>
      <Link to={'/products/' + product.id} >
        <div>
          {product.name} <br />
          {product.dateOpened}
          <br /><br />
        </div>
      </Link>
    </>
  )
}



export default ProductCard