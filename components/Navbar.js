import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
      
         <>
         <nav className='relative container mx-auto p-1'>
<div className='flex items-center justify-between'>
<Image 
src='/rsv.png'
width={110}
height={42}
className='pt-4'
/>
<div className="hidden md:flex space-x-6">
<Link href='/' className='hover:text-blue-900'> Home</Link>
<Link href='/' className='hover:text-blue-900'> About Us</Link>
<Link href='/' className='hover:text-blue-900'> Services</Link>
<Link href='/' className='hover:text-blue-900'> Gallary</Link>
<Link href='/' className='hover:text-blue-900'> Contact Us</Link>
</div>
<Link href='/' className='hidden md:block p-2 px-4 pt-2 text-white bg-blue-900 rounded-full
baseline hover:bg-red-500'> Get Started</Link>
</div>
         </nav>
         </>
    )
  }