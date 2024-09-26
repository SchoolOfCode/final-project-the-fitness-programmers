'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Goal, Dumbbell, Home, GlassWater, SmilePlus } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const navItems = [
  { href: '/goal-setter', icon: Goal, label: 'Goal' },
  { href: '/workout-tracker', icon: Dumbbell, label: 'Workout' },
  { href: '/', icon: Home, label: 'Home' },
  { href: '/water-tracker', icon: GlassWater, label: 'Water' },
];

export default function BottomNav() {
  const pathname = usePathname();

  const fetchMotivationalQuote = async () => {
    try {
      const response = await fetch(
        'https://api.quotable.io/random?tags=motivational'
      );
      const data = await response.json();

      if (response.ok) {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white border-r-5  shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className='flex-1 w-0 p-4'>
              <div className='flex items-start'>
                <div className='ml-3 flex-1'>
                  <p className='text-sm font-medium text-gray-900'>
                    {data.content}
                  </p>
                  <p className='mt-1 text-sm text-gray-500 text-center'>
                    {data.author}
                  </p>
                </div>
              </div>
            </div>
            <div className='flex border-l border-gray-200'>
              <button
                onClick={() => toast.dismiss(t.id)}
                className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              >
                Close
              </button>
            </div>
          </div>
        ));
      } else {
        toast.error('Failed to fetch motivational quote.');
      }
    } catch (error) {
      toast.error('An error occurred while fetching the quote.');
    }
  };

  return (
    <nav className='sticky bottom-0 left-0 right-0 shadow-lg bg-primaryColour'>
      <div className='flex gap-12 items-center max-w-md mx-auto'>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              pathname === item.href
                ? 'flex flex-col items-center justify-center p-2 rounded-lg bg-teal-500 font-bold'
                : 'flex flex-col items-center justify-center p-2 rounded-lg text-green-800'
            }
          >
            <item.icon className='h-6 w-6 text-white' />
            <span className='text-xs mt-1 text-white'>{item.label}</span>
          </Link>
        ))}

        <button
          type='button'
          className='text-white rounded-lg justify-center items-center flex flex-col text-xs'
          onClick={fetchMotivationalQuote}
        >
          <SmilePlus className='h-6 w-6 text-white' />
          Motivation
        </button>
      </div>
    </nav>
  );
}
