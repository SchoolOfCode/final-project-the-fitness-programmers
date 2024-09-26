'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Goal, Dumbbell, Home, GlassWater, SmilePlus } from 'lucide-react';

const navItems = [
  { href: './goal-setter', icon: Goal, label: 'Goal' },
  { href: './workout-tracker', icon: Dumbbell, label: 'Workout' },
  { href: './', icon: Home, label: 'Home' },
  { href: './water-tracker', icon: GlassWater, label: 'Water' },
  { href: './', icon: SmilePlus, label: 'Motivation' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className='fixed bottom-0 left-0 right-0 shadow-lg bg-primaryColour'>
      <div className='flex justify-between items-center max-w-md mx-auto'>
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
      </div>
    </nav>
  );
}
