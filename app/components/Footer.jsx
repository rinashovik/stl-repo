'use client'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faCoffee,faUser,faLaptopCode,faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faTiktok,faLinkedin,faYoutube,faGoogle,faSlack,faXTwitter,faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    // <div>Footer page


    <div className="container-fluid text-green text-white text-xl mt-0 h-25 p-4 border-8 flex flex-wrap justify-between bg-yellow-500">
{/* <FontAwesomeIcon icon={faFacebookF} /> */}


             {/* <div className='flex justify-start'> */}
                 <span>@Tech: {new Date().getFullYear()}</span>
                <span className="material-symbols-outlined">copyright</span>

              {/* <div className='flex justify-between'> */}
              <span> <Link href='/about'><FontAwesomeIcon icon={faUserSecret} /></Link>         
                </span>

              <FontAwesomeIcon icon={faFacebook} bounce />
             <span><FontAwesomeIcon icon={faTiktok} bounce /></span>
              <FontAwesomeIcon icon={faEnvelope} />
             <FontAwesomeIcon icon={faCoffee} bounce />
             <FontAwesomeIcon icon={faLinkedin} />
             <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faUser} />
              <FontAwesomeIcon icon={faLaptopCode} />

                 <span><FontAwesomeIcon icon={faXTwitter} /></span>
                 <span> <FontAwesomeIcon icon={faGoogle}  bounce/></span>
              <span> <FontAwesomeIcon icon={faSlack} /></span>
              <span> <FontAwesomeIcon icon={faFacebookMessenger} bounce />
              </span>        
                    
            </div>

        //  </div>
    // </div>
  )
}
