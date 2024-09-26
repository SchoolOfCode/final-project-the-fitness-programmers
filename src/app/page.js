"use client";
import { useEffect, useState } from "react";
import getData from "./utils.js";
import Nav from './components/Nav';
import BottomNav from './components/BottomNav';
import WeightLossChart from './components/WeightLossChart';

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
        <h1 className="text-2xl font-bold text-primaryColour text-center">
          Welcome, {user.name}
        </h1>
        <h1 className="text-xl font-bold text-gray-800 text-center">
          Progress tracker...
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
          <h1>Weight Loss Progress</h1>
          <WeightLossChart
            startWeight={user.startweight}
            currentWeight={user.currentweight}
            goalWeight={user.targetweight}
          />

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
