import React from 'react'
import Link from 'next/link'
import Sidebar from './components/Sidebar'
import Dashboard from './dashboard/page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons/faSliders'


export default function home() {
  return (
    <div>
      {/* <h1 style={{color:"GrayText", textAlign:"center"}}> */}

      <div className='container-fluid bg-yellow-500'>
        <h1 className='font-serif hover:font-mono hover:text-purple-900	 text-white text-2xl flex justify-center'>
        
        Welcome Simple Tech Home Page!
         </h1>
         {/* <h2 className='bg-slate-400'> Dashboard</h2>
        <button className='material-symbols-outlined text-white bg-purple-400 rounded-lg px-5'><Link href='/'>Dashboard</Link></button> */}


{/* </div> */}

        <div className='container-fluid flex flex-row px-4 justify-between'>

                {/* < Link href='/dashboard'>Dashboard<FontAwesomeIcon icon={faSliders} /></Link> */}
                <div className='flex-row gap-5 justify-end gap-5'> 


<ul className='col-2'>
  <li>List of Item 1</li>
  <li>List of Item 2</li>
  <li>List of Item 3</li>
  <li>List of Item 4</li>
  <li>List of Item 5</li>
  <li>List of Item 6</li>
  <li>List of Item 7</li>
  <li>List of Item 8</li>
  <li>List of Item 9</li>
  <li>List of Item 10</li>
  <li>List of Item 11</li>
  
</ul>

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
