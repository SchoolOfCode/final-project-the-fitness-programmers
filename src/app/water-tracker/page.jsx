'use client';

import React, { useState } from 'react';
import TextBox from '../components/TextBox';
import Nav from './components/Nav';
import BottomNav from './components/BottomNav';

export default function WaterTracker() {
  const handleValueChange = (value) => {
    console.log('Litres entered:', value);
  };

  return (
    <>
      <Nav />
      <div className='wrapper'>
        <div className='heading'>
          <h1>Water Intake:</h1>
        </div>

        <div className='input-section'>
          <div className='workout-type'>
            <p>Daily Water Intake</p>
            <TextBox
              label='Input minutes:'
              placeholder='Enter litres'
              onValueChange={handleValueChange}
            />
          </div>

          <div className='duration'>
            <p>Daily Water Goal</p>
            <TextBox
              label='Input minutes:'
              placeholder='Enter litres'
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
