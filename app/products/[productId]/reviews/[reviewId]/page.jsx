import React from 'react'

export default function ProductReview({params}) {
  return (
    <div>

        <h2> Review {params.reviewId} for Product {params.productId}</h2>
    </div>
  )
}
