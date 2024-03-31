
import React from 'react'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

export default function Dashboard() {
  return (
    <div className='container-fluid bg-blue-400 text-white mt-2 flex justify-between'>
    

{/* <div className='flex-row gap-5 justify-end gap-5'>  */}
        <Sidebar slides={undefined} />
        <span><Link href="/blog">Blog</Link></span>
        <span><Link href="/products">Product</Link></span>
<span className="material-symbols-outlined "><Link href="/dashboard/settings/profile">account_circle</Link></span>
    <span className="material-symbols-outlined">&#xE8B8;</span>
{/* </div> */}


<div>
       {/* <Sidebar /> */}

   </div>
   </div>
   
  )
}





// import { Suspense } from 'react'
// import { PostFeed, Weather } from './Components'
 
// export default function Posts() {
//   return (
//     <section>
//       <Suspense fallback={<p>Loading feed...</p>}>
//         <PostFeed />
//       </Suspense>
//       <Suspense fallback={<p>Loading weather...</p>}>
//         <Weather />
//       </Suspense>
//     </section>
//   )
// }