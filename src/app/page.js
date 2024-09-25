"use client"

import React, { useState, useEffect } from "react"
import { user } from "./data.js"

export default function FitnessTracker() {

  if (!user) return <div className="p-4 text-center">Loading...</div>

  return (
    <div className="min-h-fit bg-gray-100 p-4 space-y-4 max-w-md mx-auto font-sans">
      <h1 className="text-2xl font-bold text-gray-800">Fitness Tracker</h1>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Weight Progress</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-500">Start</p>
            <p className="text-lg font-semibold">{user[0].startWeight} kg</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Current</p>
            <p className="text-lg font-semibold">{user[0].currentWeight} kg</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Target</p>
            <p className="text-lg font-semibold">{user[0].targetWeight} kg</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Weight Loss Chart</h2>
        <div className="h-48 flex items-center justify-center bg-gray-200 text-gray-400 rounded">
          placeholder
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Daily Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Target calories</p>
            <p className="text-lg font-semibold">{user[0].targetCalories} kcal</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Achieved calories</p>
            <p className="text-lg font-semibold">{user[0].achievedCalories} kcal</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Workout time / goal</p>
            <p className="text-lg font-semibold">1 hour</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Average workout time</p>
            <p className="text-lg font-semibold">30 mins</p>
          </div>
        </div>
      </div>
    </div>
  )
}