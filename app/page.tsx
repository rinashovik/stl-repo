import React from 'react'
import Link from 'next/link'
import Sidebar from './components/Sidebar'
import Dashboard from './dashboard/page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons/faSliders'


export default function home() {
  return (
    <div>
      <div className='bg-slate-600 h-screen w-full'>
        <h1 className='font-serif hover:font-mono hover:text-purple-900 text-white text-2xl flex justify-center'>
        
        Welcome Simple Tech Home Page!
         </h1>
    
                {/* < Link href='/dashboard'>Dashboard<FontAwesomeIcon icon={faSliders} /></Link> */}
                {/* <div className='flex-row gap-5 justify-end gap-5'>  */}


  {/* <div className='container flex flex-row flex-wrap-reverse justify-around bg-slate-200 border-4 border-slate-800 text-2xl text-white text-center box-border border-black'> */}
  {/* <div className='container-fluid flex flex-col flex-wrap-reverse justify-end bg-slate-200 border-4 border-slate-800 text-2xl text-white text-center box-border border-black'> */}
  <div className='grid grid-cols-3 float-right justify-center gap-4 px-4 pt-4 pb-4 text-center text-white bg-violet-500 border-4 border-white'>

  <div className='bg-indigo-500 order-last'> Item 1</div>
  {/* <div className='bg-indigo-500 flex-1 order-last'> Item 1</div> */}

  <div className='bg-green-500 flex-initial w-32'>Item 2</div>
  <div className='bg-purple-300 underline'> Item 3</div>
  <div className='bg-teal-500'> Item 4</div>
  <div className='bg-orange-500'> Item 5</div>
  <div className='bg-blue-500 line-through'> Item 6 </div>
  <div className='bg-slate-500'> Item 7</div>
  <div className='bg-indigo-500'> Item 8</div>
  <div className='bg-red-500'> Item 9</div>
  <div className='bg-sky-500'> Item 10</div>
  <div className='bg-gray-500'> Item 11</div> 
  <div className='bg-teal-500'> Item 12</div> 
  <div className='bg-violet-500'> Item 13</div> 

  
</div>


{/* 
          <span>   <Link href="/blog">Blog</Link>
</span>
          <span>    <Link href="/products">Product</Link>
</span>
<span className="material-symbols-outlined "><Link href="/profile">account_circle</Link></span>
    <span className="material-symbols-outlined">&#xE8B8;</span> */}
                      </div>


        </div> 
        // </div>
        // </div>
        
  )
}
