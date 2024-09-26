"use client";
import { useEffect, useState } from "react";
import getData from "./utils.js";
import Nav from './components/Nav';
import BottomNav from './components/BottomNav';
import WeightLossChart from './components/Chart'

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
      <div className="min-h-screen bg-applegreen mb-14 p-4 space-y-6 max-w-lg mx-auto font-sans">
        <h1 className="text-2xl font-bold text-offblack text-center">
          Welcome, {user.name}
        </h1>
        <h1 className="text-xl font-bold text-offblack text-center">
          Progress tracker...
        </h1>

        {/* Weight Progress Section */}
        <div className="bg-offwhite rounded-lg  p-6 space-y-4">
          <div className="grid grid-cols-3 gap-3 text-center">
            <WeightStat label="Start" value={`${startweight} kg`} />
            <WeightStat label="Current" value={`${currentweight} kg`} />
            <WeightStat label="Target" value={`${targetweight} kg`} />
          </div>
        </div>

        {/* Weight Loss Chart Section */}
        <div className="bg-offwhite rounded-lg p-6 space-y-4">
          <WeightLossChart
            startWeight={user.startweight}
            currentWeight={user.currentweight}
            goalWeight={user.targetweight}
          />
        </div>

        {/* Daily Stats Section */}
        <div className="bg-offwhite rounded-lg p-6 space-y-4">
          <h2 className="text-xl text-center font-semibold text-offblack">

            Daily Stats
          </h2>
          <div className="text-center grid grid-cols-2 gap-4">
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
      <p className="text-sm text-fitbitgrey">{label}</p>
      <p className="text-lg font-semibold text-offblack">{value}</p>
    </div>
  );
}

// Reusable component for displaying daily stats
function DailyStat({ label, value }) {
  return (
    <div>
      <p className="text-sm text-fitbitgrey">{label}</p>
      <p className="text-lg font-semibold text-offblack">{value}</p>
    </div>
  );
}
