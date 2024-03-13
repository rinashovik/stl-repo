import React from 'react'

export default function ProductDetails({params}) {
    return (
      <div>
         <h2>Details about Product{params.productId}</h2>
         </div>
    )
  }