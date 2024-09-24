'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dumbbell, Home, User, Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-green-600 shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-8'>
            <div>
              <Link href='/' className='flex items-center py-4 px-2'>
                <Dumbbell className='h-8 w-8 mr-2 text-white' />
                <span className='font-semibold text-white text-lg'>
                  FitEase
                </span>
              </Link>
            </div>
          </div>
          <div className='hidden md:flex items-center space-x-1'>
            <Link
              href='/'
              className='py-4 px-2 text-white hover:text-green-200 transition duration-300'
            >
              <Home className='h-5 w-5 inline-block mr-1' />
              Home
            </Link>
            <Link
              href='/workouts'
              className='py-4 px-2 text-white hover:text-green-200 transition duration-300'
            >
              <Dumbbell className='h-5 w-5 inline-block mr-1' />
              Workouts
            </Link>
            <Link
              href='/profile'
              className='py-4 px-2 text-white hover:text-green-200 transition duration-300'
            >
              <User className='h-5 w-5 inline-block mr-1' />
              Profile
            </Link>
          </div>
          <div className='md:hidden flex items-center'>
            <button
              className='outline-none mobile-menu-button'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className='h-6 w-6 text-white' />
              ) : (
                <Menu className='h-6 w-6 text-white' />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <Link
            href='/'
            className='block py-2 px-4 text-sm text-white hover:bg-green-700'
          >
            Home
          </Link>
          <Link
            href='/workouts'
            className='block py-2 px-4 text-sm text-white hover:bg-green-700'
          >
            Workouts
          </Link>
          <Link
            href='/profile'
            className='block py-2 px-4 text-sm text-white hover:bg-green-700'
          >
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
}
