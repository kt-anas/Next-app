import React from 'react'

const Reviews = ({ params }: {params: {productId: string, reviewsId: string}}) => {
  return (
    <div>
      <div>Reviews</div>
      <div>ReviewsId {params.reviewsId}</div>
      <div>ProductId {params.productId}</div>
    </div>
  )
}

export default Reviews
