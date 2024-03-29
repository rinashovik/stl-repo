
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Simple Technology Learning",
    description: "Generated by TechNo",
  };

export default function About() {
  return (
    <div>About US!!!
<div className="bg-white dark:bg-black-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      {/* <img className="h-6 w-6 text-white" src="C:\Users\risho\OneDrive\Desktop\next-project\stl-repo\public\next.img" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><!-- ... --></svg> */}
    </span>
  </div>
  <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>



    </div>
  )
}
