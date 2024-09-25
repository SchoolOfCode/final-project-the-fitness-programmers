'use client';
import Link from 'next/link';
import { Goal, Dumbbell, House, GlassWater, SmilePlus } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className='bg-green-600 shadow-lg' role='navigation'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex flex-col items-center justify-center'>
            <Link href='/'>
              <Goal />
            </Link>
            <span>Goal</span>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Link href='/'>
              <Dumbbell />
            </Link>
            <span>Workout</span>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Link href='/'>
              <House />
            </Link>
            <span>Home</span>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Link href='/'>
              <GlassWater />
            </Link>
            <span>Water</span>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Link href='/'>
              <SmilePlus />
            </Link>
            <span>Motivation</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
