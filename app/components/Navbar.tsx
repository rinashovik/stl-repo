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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
  return (
    // <div>Navbar

<div className="container-fluid text-white text-xl mt-0 h-25 p-4 border-8 flex justify-between bg-gray-900 ">
    <ul>
      
      <li className="text-purple text-xxl"> <Link href='/'>&#x2655;@Tech-Know</Link></li>
      <li>< Link href='/dashboard'>Dashboard<FontAwesomeIcon icon={faSliders} /></Link>
</li>
    
    
    </ul>
        <span > &#x2614;</span>

    <span className="material-symbols-outlined"><Link href='/'>Home</Link></span>
<button>
    <input type='text' placeholder='search' className='material-symbols-outlined rounded' />
</button>
    <button className="material-symbols-outlined"><Link href='/search'>Search</Link></button>

    {/* <span className="material-symbols-outlined">&#xE87D;</span> */}

    <div className='flex justify-end gap-5'>
    <span className="material-symbols-outlined "><Link href="/with-auth-layout/login">account_circle</Link></span>
     <p><Link href="/with-auth-layout/login">Sign in</Link></p>
    <span className="material-symbols-outlined">&#xE8B8;</span>

</div>
</div>
    // </div>
  )
}
