'use client';

import Link from 'next/link';
import { Dumbbell, UserRound } from 'lucide-react';

export default function Nav() {
  return (
    <nav className='bg-green-600 shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <Link href='/' className='flex items-center'>
            <Dumbbell className='h-8 w-8 mr-2 text-white' />
            <span className='font-semibold text-white text-lg'>FitEase</span>
          </Link>
          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
            <UserRound />
          </div>
        </div>
      </div>
    </nav>
  );
}
