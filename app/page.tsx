import React from 'react'
import Link from 'next/link'
import Sidebar from './components/Sidebar'
import Dashboard from './dashboard/page'
export default function home() {
  return (
    <div>
      {/* <h1 style={{color:"GrayText", textAlign:"center"}}> */}

      <div className='container-fluid bg-indigo-400'>
        <h1 className='font-serif hover:font-mono hover:text-purple-900	 text-white text-2xl flex justify-center'>
        
        Welcome Home!
         </h1>
         {/* <h2 className='bg-slate-400'> Dashboard</h2>
        <button className='material-symbols-outlined text-white bg-purple-400 rounded-lg px-5'><Link href='/'>Dashboard</Link></button> */}


{/* </div> */}
        <div className='container-fluid flex flex-row justify-between'>

                {/* <Sidebar />  */}


                {/* <Dashboard /> */}
                <div className='flex-row gap-5 justify-end gap-5'> 
{/* 
          <span>   <Link href="/blog">Blog</Link>
</span>
          <span>    <Link href="/products">Product</Link>
</span>
<span className="material-symbols-outlined "><Link href="/profile">account_circle</Link></span>
    <span className="material-symbols-outlined">&#xE8B8;</span> */}
                      </div>


        </div> 
        </div>
        </div>
        
  )
}
