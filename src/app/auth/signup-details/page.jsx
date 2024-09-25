import Link from 'next/link';
import {
  ContactRound,
  CalendarDays,
  Ruler,
  Weight,
  Target,
  ArrowRight,
  SmartphoneCharging,
} from 'lucide-react';

export default function UserDetailsPage() {
  return (
    <div className='min-h-screen bg-main px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 sm:p-10'>
        <div className='text-center'>
          <h2 className='pt-32 text-2xl sm:text-3xl font-extrabold text-primaryColour'>
            We just need some more details...
          </h2>
        </div>
        <form className='space-y-6 ' action='#' method='POST'>
          <div className='rounded-md shadow-sm -space-y-px flex flex-col gap-8  justify-center'>
            {/* Name */}
            <div className='relative'>
              <ContactRound className='absolute left-2 top-2 text-black' />
              <input
                id='height'
                name='height'
                type='number'
                required
                className='block w-full px-3 py-2 pl-10 border  placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 focus:z-10 sm:text-sm block'
                placeholder='Name'
              />
            </div>
            {/* Age */}
            <div className='relative'>
              <CalendarDays className='absolute left-2 top-2 text-black' />
              <input
                id='height'
                name='height'
                type='number'
                required
                className='block w-full px-3 py-2 pl-10 border  placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 focus:z-10 sm:text-sm block'
                placeholder='Age'
              />
            </div>
            {/* Weight */}
            <div className='relative'>
              <Weight
                className='absolute left-3 top-2.5 text-black'
                size={20}
              />
              <input
                id='weight'
                name='weight'
                type='number'
                required
                className='block w-full px-3 py-2 pl-10 border  placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 focus:z-10 sm:text-sm block'
                placeholder='Weight (kg)'
              />
            </div>
            {/* Height */}
            <div className='relative'>
              <Ruler className='absolute left-2 top-2 text-black' />
              <input
                id='height'
                name='height'
                type='number'
                required
                className='block w-full px-3 py-2 pl-10 border  placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 focus:z-10 sm:text-sm block'
                placeholder='Height (cm)'
              />
            </div>
            {/* Activity level */}
            <div className='relative'>
              <SmartphoneCharging
                className='absolute left-3 top-2.5 text-black'
                size={20}
              />
              <select
                id='goal'
                name='goal'
                required
                className='block w-full px-3 py-2 pl-10 border  placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 focus:z-10 sm:text-sm block'
              >
                <option value=''>Activity level</option>
                <option value='lose_weight'>Low</option>
                <option value='gain_muscle'>Med</option>
                <option value='maintain'>High</option>
              </select>
            </div>
          </div>
          {/* Submit button */}
          <div>
            <Link
              href='/dashboard'
              className='relative w-full flex justify-center py-2 px-4 border border-transparent text-l font-medium rounded-full text-white bg-primaryColour font-extrabold'
            >
              Submit
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
