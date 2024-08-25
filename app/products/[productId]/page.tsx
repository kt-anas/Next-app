 
import React from 'react'
 type Props = {
   params: {productId: string}
 }
const Products = ({ params }:Props) => {

  console.log(params)
    
  return (
    <div>
    <div>ProductId {params.productId}</div>
    </div>
  )
}

export default Products
