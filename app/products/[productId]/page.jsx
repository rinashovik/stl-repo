
"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'


export default function ProductDetails({params}) {


  
  const router = useRouter();

  const handleClick = ()=>{
      console.log("placing the order");

router.push("/payments");
alert("Order placed Successfull")
  // router.back();
  // router.forward();
  }

    return (
      <div className='pl-6'>
         <h2 >Details about Product{params.productId}</h2>
         <span><Link href='/reviews:${reviewId}'>Review of the Products</Link></span>
<div>
         <h4>Place Your order</h4>
        <button className='w-24 bg-blue-600 text-orange-600 rounded-lg' onClick={handleClick}>Place Order</button>
</div>
         </div>
    )
  }