"use client"


import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <nav className='relative container mx-auto'>
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
          <div className=' hidden md:flex space-x-6 font-bold text-slate-900'>
            <Link href='/' className='hover:text-blue-700'>
              Home
            </Link>
            <Link href='/about-us' className='hover:text-blue-700'>
              About Us
            </Link>
            <Link href='/services-offered' className='hover:text-blue-700'>
              Services
            </Link>
            <Link href='/allProjects' className='hover:text-blue-700'>
              Projects
            </Link>
            <Link href='/contact-us' className='hover:text-blue-700'>
              Contact Us
            </Link>
          </div>
          <div className='md:hidden'>
            {showMenu ? (
              <AiOutlineClose
                className='w-10 h-10 cursor-pointer'
                onClick={toggleMenu}
              />
            ) : (
              <AiOutlineMenu
                className='w-10 h-10 cursor-pointer'
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {showMenu && (
          <div className='md:hidden'>
            <ul className='flex flex-col items-center space-y-4 mt-4 font-bold text-slate-900'>
              <li>
                <Link href='/' className='hover:text-blue-700'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about-us' className='hover:text-blue-700'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/services-offered' className='hover:text-blue-700'>
                  Services
                </Link>
              </li>
              <li>
                <Link href='/allProjects' className='hover:text-blue-700'>
                  Projects
                </Link>
              </li>
              <li>
                <Link href='/contact-us' className='hover:text-blue-700'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
