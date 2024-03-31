
import Image from 'next/image'
import sunset from '/images/sunset_2.jpg';


export default function Profile() {
  return (
    <div className='container flex justify-end'>
        
       <div className='flex p-8 box-border h-64 w-64 rounded-lg border-2 border-black shadow-2xl shadow-blue-800 active:bg-violet-700'>

        <Image className='rounded-full' src= {sunset} 
        alt="Sun-Set Picture" 
        quality={100}
        sizes='100vw'
        />
        

    </div>

            {/* <h2 className='p-6'>Profile Picture</h2> */}

    </div>      


  )
}
