import Link from 'next/link'
import React from 'react'

export default function LogIn() {
  return (
    <div className='container-fluid flex justify-center bg-slate-600 text-white content-center'>

<h1> LogIn Page</h1>

<div>
   <div className="box-border bg-blue-500 h-96 w-96 px-20 py-20 mt-8 mb-8 flex">
    <div className="flex flex-column gap-4">
  <form >

<label>Email or UserName</label>
<input  type='text' placeholder='text' aria-label=".form-control-lg example"/>

<label  className="form-label">Password</label>
<input  type='password' placeholder='password'className="form-control"  />

<button className='mt-4'><Link href='/dashboard'>Sign in</Link></button>
<div>

  <span>Don't have account?</span>
<button><Link href='/register'>Register Now</Link></button>

</div>

</form>

</div>
</div>
</div>



      
</div>
  )
}
