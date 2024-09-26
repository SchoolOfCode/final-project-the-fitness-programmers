'use client'

import React, { useState } from 'react';
import TextBox from '../components/TextBox'
import { GlassWater } from 'lucide-react';
import Nav from '../components/Nav';
import BottomNav from '../components/BottomNav';

export default function WaterTracker() {

    const handleValueChange = (value) => {
        console.log('Litres entered:', value);
    };

    return (
        <>
            <Nav />
            <div className="max-w-lg mx-auto w-full bg-applegreen flex-col space-y-20 min-h-screen flex items-center justify-center bg-white-500 px-4 pb-20 sm:px-6 lg:px-8">

                <div className="heading text-center">
                    <div className="flex justify-center">
                        <GlassWater className="text-teal-400" size={80} />
                    </div>
                    <h1 className="mt-2 text-4xl font-bold text-offblack">Water Intake</h1>
                </div>

                <div className="flex-col space-y-2 w-full">
                    <div className="h-32 bg-offwhite text-center rounded-t-2xl px-10 py-3 space-y-4">
                        <div className="block w-full rounded-md space-y-4">
                            <p className="mt-2 text-2xl text-fitbitgrey">Daily Water Intake</p>
                            <TextBox className="block w-full px-3 py-2 pl-10 border  placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-teal-400 focus:border-teal-400 focus:z-10 sm:text-sm block" placeholder="Enter litres" onValueChange={handleValueChange} />
                        </div>
                    </div>

                    <div className="h-32 bg-offwhite text-center rounded-b-2xl px-10 pt-1 pb-5 space-y-1">
                        <div>
                            <p className="mt-2 text-2xl text-fitbitgrey">Daily Water Goal</p>
                            <p className="mt-2 text-2xl text-fitbitgrey">1.5L</p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold text-main rounded-full bg-teal-300 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400">
                    <button>Submit</button>
                </div>

            </div>
            <BottomNav />
        </>
    )
}