import Link from 'next/link'
import React from 'react'

export default function LogIn() {
  return (
    <div className='container-fluid bg-slate-600 text-white justify-content-center'>

<h1> LogIn Page</h1>

<div>
   <div className="box-border bg-blue-500 h-96 w-96 px-16 card flex justify-content-center">
    <div className="flex flex-column gap-2">
  <form >

<label>Email or UserName</label>
<input  type='text' placeholder='text' aria-label=".form-control-lg example"/>

<label  className="form-label">Password</label>
<input  type='password' placeholder='password'className="form-control"  />

<button><Link href='/dashboard'>Sign in</Link></button>

</form>

</div>
</div>
</div>



      
</div>
  )
}
