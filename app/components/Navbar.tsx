// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <div>
        
//         Navbar
//         <div className="container-fluid text-white text-xl mt-0 h-25 p-4 border-8 flex justify-around bg-gray-900 ">
//     <ul> <Link href='/'>@Tech-Know</Link></ul>
//     <ul> <Link href='/about'>About</Link></ul>
//     <ul> <Link href='/contact'>Contact</Link></ul>
//     <ul> <Link href='/search'>Search</Link></ul>


// </div>


//     </div>
//   )
// }
import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    // <div>Navbar

<div className="container-fluid text-white text-xl mt-0 h-25 p-4 border-8 flex justify-between bg-gray-900 ">
    <ul className="text-purple text-xxl"> <Link href='/'>&#x2655;@Tech-Know</Link></ul>
        <span > &#x2614;</span>

    <span className="material-symbols-outlined"><Link href='/'>Home</Link></span>
    {/* <span className="material-symbols-outlined"><Link href='/search'>Search</Link></span> */}
    <span className="material-symbols-outlined"><Link href='/search'>Search</Link></span>

    {/* <span className="material-symbols-outlined">&#xE87D;</span> */}

    <div className='justify-end grid gap-5'>
    {/* <span className="material-symbols-outlined "><Link href="/profile">account_circle</Link></span>
    <span className="material-symbols-outlined">&#xE8B8;</span> */}

</div>
</div>
    // </div>
  )
}
