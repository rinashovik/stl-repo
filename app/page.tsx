import React from 'react'
import Link from 'next/link'
export default function home() {
  return (
    <div>
      <h1 style={{color:"GrayText", textAlign:"center"}}>
        
        Welcome Home!
         </h1>

         <Link href="/blog">Blog</Link>
         <Link href="/products">Product</Link>

        </div>
  )
}
