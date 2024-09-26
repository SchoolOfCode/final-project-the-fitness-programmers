'use client';

import React, { useState } from 'react';
import TextBox from '../components/TextBox';
import DateInput from '../components/DateInput';
import Nav from './components/Nav';
import BottomNav from './components/BottomNav';

export default function GoalSetter() {
  const handleValueChange = (value) => {
    console.log('Minutes entered:', value);
  };

  const handleDateChange = (date) => {
    console.log('Date selected:', date);
  };

  return (
    <>
      <Nav />
      <div className='flex-col min-h-screen flex items-center justify-center bg-white-500 px-4 sm:px-6 lg:px-8'>
        <div className='heading'>
          <h1 className='mt-2 text-3xl font-bold text-indigo-500'>
            Set a goal
          </h1>
        </div>

        <div className='input-section'>
          <div className='workout-type'>
            <p className='text-gray-500 font-semibold'>
              Enter your target weight
            </p>
            <TextBox
              className='block w-full px-3 py-2 pl-10 border  placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 focus:z-10 sm:text-sm block'
              size={20}
              placeholder='Enter weight in KG'
              onValueChange={handleValueChange}
            />
          </div>

          <div className='duration'>
            <p>Target date</p>
            <DateInput onDateChange={handleDateChange} />
          </div>
        </div>

        <div className='submit-btn'>
          <button>Submit</button>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
