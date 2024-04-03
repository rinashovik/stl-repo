"use client";



import Link from "next/link";
import { usePathname } from "next/navigation";


const navLink =[
    {  name: "Register", href:"/register" },
    {  name: "Login", href:"/login" },
    {  name: "Forgot Password", href:"/forgot-password" }

]


export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname= usePathname();

    return (

<>
<div className='bg-rose-50'>
{navLink.map((link) =>{   
    
    const isActive= pathname.startsWith(link.href);

    return(

        <Link href={link.href} key={link.name}
        className={isActive? "font-bold mr-4" : "text-cyan-500 mr-4"}>{link.name}</Link>
    )
})}
        
        <div>
            <h2>Inner Layout</h2>
            {children}
        </div>
        </div>
        </>
        )
  }