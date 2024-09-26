'use client'; // Ensure it's a client component
import Link from 'next/link';
import {
  ContactRound,
  CalendarDays,
  Ruler,
  Weight,
  SmartphoneCharging,
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function UserDetailsPage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const router = useRouter(); // Initialize the router

  // Simulate a function that saves the user details (as a promise)
  const saveUserDetails = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && age && weight && height && activityLevel) {
          resolve(); // Simulating success
        } else {
          reject(); // Simulating failure
        }
      }, 2000); // 2-second delay for simulation
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show the toast.promise while saving the details
    toast.promise(
      saveUserDetails(), // Call the async function
      {
        loading: 'Saving your details...',
        success: <b>Details saved successfully!</b>,
        error: <b>Could not save your details.</b>,
      }
    )
      .then(() => {
        // If successful, navigate to the dashboard
        router.push('/');
      })
      .catch((error) => {
        console.error('Error saving details:', error);
      });
  };

  return (
    <div className='min-h-screen bg-main px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 sm:p-10'>
        <div className='text-center'>
          <h2 className='pt-32 text-2xl sm:text-3xl font-extrabold text-primaryColour'>
            We just need some more details...
          </h2>
        </div>
        <form className='space-y-6' onSubmit={handleSubmit} method='POST'>
          <div className='rounded-md shadow-sm -space-y-px flex flex-col gap-8 justify-center'>
            {/* Name */}
            <div className='relative'>
              <ContactRound className='absolute left-2 top-2 text-black' />
              <input
                id='name'
                name='name'
                type='text'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='block w-full px-3 py-2 pl-10 border placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 sm:text-sm'
                placeholder='Name'
              />
            </div>
            {/* Age */}
            <div className='relative'>
              <CalendarDays className='absolute left-2 top-2 text-black' />
              <input
                id='age'
                name='age'
                type='number'
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className='block w-full px-3 py-2 pl-10 border placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 sm:text-sm'
                placeholder='Age'
              />
            </div>
            {/* Weight */}
            <div className='relative'>
              <Weight className='absolute left-3 top-2.5 text-black' size={20} />
              <input
                id='weight'
                name='weight'
                type='number'
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className='block w-full px-3 py-2 pl-10 border placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 sm:text-sm'
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
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className='block w-full px-3 py-2 pl-10 border placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 sm:text-sm'
                placeholder='Height (cm)'
              />
            </div>
            {/* Activity level */}
            <div className='relative'>
              <SmartphoneCharging className='absolute left-3 top-2.5 text-black' size={20} />
              <select
                id='activity-level'
                name='activity-level'
                required
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className='block w-full px-3 py-2 pl-10 border placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 sm:text-sm'
              >
                <option value=''>Activity level</option>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
              </select>
            </div>
          </div>
          {/* Submit button */}
          <div>
            <button
              type='submit'
              className='relative w-full flex justify-center py-2 px-4 border border-transparent text-l font-medium rounded-full text-white bg-primaryColour font-extrabold'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

