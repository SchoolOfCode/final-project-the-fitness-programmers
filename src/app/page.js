"use client";
import { useEffect, useState } from "react";
import getData from "./utils.js";
import Nav from './components/Nav';
import BottomNav from './components/BottomNav';

export default function FitnessTracker() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  //Use it on Frontend
  useEffect(() => {
    async function fetchUserData() {
      const userData = await getData(1);
      setData(userData);
      setLoading(false); // Set loading to false once data is fetched
    }

    fetchUserData();
  }, []);

  console.log(data);
  // Render this while data is loading
  if (loading) {
    return <div className="spin"></div>;
  }

  //Destructure safely
  const { user } = data || {};
  const {
    startweight,
    currentweight,
    targetweight,
    targetcalories,
    achievedcalories,
  } = user || {};

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-50 p-4 space-y-6 max-w-lg mx-auto font-sans">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Fitness Tracker
        </h1>

        {/* Weight Progress Section */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">
            Weight Progress
          </h2>
          <div className="grid grid-cols-3 gap-3 text-center">
            <WeightStat label="Start" value={`${startweight} kg`} />
            <WeightStat label="Current" value={`${currentweight} kg`} />
            <WeightStat label="Target" value={`${targetweight} kg`} />
          </div>
        </div>

        {/* Weight Loss Chart Section */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">
            Weight Loss Chart
          </h2>
          <div className="h-48 flex items-center justify-center bg-gray-200 text-gray-400 rounded">
            Placeholder for chart
          </div>
        </div>

        {/* Daily Stats Section */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">
            Daily Stats
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <DailyStat
              label="Target Calories"
              value={`${targetcalories} kcal`}
            />
            <DailyStat
              label="Achieved Calories"
              value={`${achievedcalories} kcal`}
            />
            <DailyStat label="Workout Time / Goal" value="1 hour" />
            <DailyStat label="Average Workout Time" value="30 mins" />
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

// Reusable component for displaying weight stats
function WeightStat({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  );
}

// Reusable component for displaying daily stats
function DailyStat({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  );
}
