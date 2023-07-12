import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
      
         <>
         <nav className='relative container mx-auto p-2'>
<div className='flex items-center justify-between'>
<Image 
src='/rsv.png'
width={150}
height={62}
className='pt-4 ml-6'
/>
<div className="hidden md:flex space-x-6 font-bold text-slate-900">
<Link href='/' className='hover:text-blue-700'> Home</Link>
<Link href='/about-us' className='hover:text-blue-700'> About Us</Link>
<Link href='/services' className='hover:text-blue-700'> Services</Link>
<Link href='/projects' className='hover:text-blue-700'> Projects</Link>
<Link href='/contact-us' className='hover:text-blue-700'> Contact Us</Link>
</div>
{/* <Link href='/' className='hidden md:block p-2 px-4 pt-2 text-white bg-blue-900 rounded-full
baseline hover:bg-red-500'> Get Started</Link> */}
</div>
         </nav>
         </>
    )
  }