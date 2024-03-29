
import React from 'react'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSliders } from '@fortawesome/free-solid-svg-icons'

export default function Dashboard() {
  return (
    <div className='container-fluid bg-blue-500 text-white flex justify-between'>
        {/* <h2 className='bg-slate-400'>Dashboard</h2> */}
      {/* <span className='text-white py-1 text-xl gap-5'> */}
      {/* <span> <button className='material-symbols-outlined text-white bg-purple-400 rounded px-5'><Link href='/'>Dashboard</Link></button></span> */}
        {/* Dashboard</span> */}
        {/* <span><button className='text-white py-1 px-5 rounded bg-blue-300 gap-5'> 
        <FontAwesomeIcon icon={faSliders} />Dashboard</button></span> */}

{/* <div className='flex-row gap-5 justify-end gap-5'>  */}


        <span>   <Link href="/blog">Blog</Link>
</span>
          <span>    <Link href="/products">Product</Link>
</span>
<span className="material-symbols-outlined "><Link href="/dashboard/settings/profile">account_circle</Link></span>
    <span className="material-symbols-outlined">&#xE8B8;</span>
{/* </div> */}


<div>
       {/* <Sidebar /> */}

   </div>
   </div>
   
  )
}
