'use client';
import React, { useState } from 'react';
import DropdownMenu from '../components/DropdownMenu';
import TextBox from '../components/TextBox';
import Nav from './components/Nav';
import BottomNav from './components/BottomNav';

export default function WorkoutTracker() {
  const handleValueChange = (value) => {
    console.log('Minutes entered:', value);
  };

  const exerciseOptions = [
    'Push-ups',
    'Squats',
    'Jumping Jacks',
    'Planks',
    'Running',
  ];

  return (
    <>
      <Nav />
      <div className='wrapper'>
        <div className='heading'>
          <h1>Set your workout:</h1>
        </div>

        <div className='input-section'>
          <div className='workout-type'>
            <p>Workout type</p>
            <DropdownMenu label='Choose exercise:' options={exerciseOptions} />
          </div>

          <div className='duration'>
            <p>Duration</p>
            <TextBox
              label='Input minutes:'
              placeholder='Enter minutes'
              onValueChange={handleValueChange}
            />
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
