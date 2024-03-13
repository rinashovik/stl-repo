
"use client";
import React from 'react'
import { useRouter } from 'next/navigation';



export default function Productorder() {
const router = useRouter();

    const handleClick = ()=>{
        console.log("placing the order");

// router.push("/");
    router.back();
    router.forward();


    }

  return (
    <div>
        <>
        
        <h2>Productorder</h2>
        <button onClick={handleClick}>Place Order</button>
        </>
        
    </div>
  )
}
