import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
      
         <>
         <nav className='relative container mx-auto '>
<div className='flex items-center justify-between'>
<Link href='/'>
<Image 
alt='logo'
src='/rsv.svg'
width={200}
height={100}
className='ml-6'
/>
</Link>
<div className="hidden md:flex space-x-6 font-bold text-slate-900">
<Link href='/' className='hover:text-blue-700'> Home</Link>
<Link href='/about-us' className='hover:text-blue-700'> About Us</Link>
<Link href='/services-offered' className='hover:text-blue-700'> Services</Link>
<Link href='/allProjects' className='hover:text-blue-700'> Projects</Link>
<Link href='/contact-us' className='hover:text-blue-700'> Contact Us</Link>
</div>
{/* <Link href='/' className='hidden md:block p-2 px-4 pt-2 text-white bg-blue-900 rounded-full
baseline hover:bg-red-500'> Get Started</Link> */}
</div>
         </nav>
         </>
    )
  }