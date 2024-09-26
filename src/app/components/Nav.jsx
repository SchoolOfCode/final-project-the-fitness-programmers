'use client';

import Link from 'next/link';
import { Dumbbell, UserRound } from 'lucide-react';

export default function Nav() {
  return (
    <nav className='bg-primaryColour shadow-lg sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <Link href='/' className='flex items-center'>
            <Dumbbell className='h-8 w-8 mr-2 text-white' />
            <span className='font-semibold text-white text-lg'>FitEase</span>
          </Link>
          <div className=''>
            <Link
              href='./myProfile'
              className='w-10 h-10 bg-white rounded-full flex items-center justify-center'
            >
              <UserRound className='h-6 w-6 text-primaryColour' />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
