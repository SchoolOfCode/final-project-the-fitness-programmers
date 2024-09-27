import React, { useState } from "react";
import { addWorkout } from "../utils";

const NewWorkoutForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");

  console.log(selectedOption, selectedDuration);

  const exerciseOptions = [
    "Running",
    "Free-Weights",
    "Hiking",
    "Cycling",
    "Swimming",
    "HIIT",
    "Triathalon",
  ];

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDurationChange = (e) => {
    setSelectedDuration(e.target.value);
  };

  return (

      <div className="flex flex-col justify-between">
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent page reload
  
            // Call addWorkout with id (e.g., 1) and the updated data
            addWorkout(1, {
              type: selectedOption,
              duration: parseFloat(selectedDuration), // Convert duration to decimal
            });
            console.log("Form submitted");
          }}
          className="space-y-2"
        >
          <div className="h-32 bg-offwhite text-center rounded-t-2xl px-10 py-3 space-y-4">
            <div className="block w-full rounded-md space-y-2">
              <p className="mt-2 text-2xl text-fitbitgrey">Workout type</p>
              <label
                htmlFor="dropdown"
                className="flex justify-center mb-4 w-full"
              >
                <select
                  className="block w-full px-3 py-2 pl-10 border placeholder-main text-main rounded-full focus:outline-none focus:ring-teal-400 focus:border-teal-400 sm:text-sm"
                  id="dropdown"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option value="">-- Select an option --</option>
                  {exerciseOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
  
          <div className="h-32 bg-offwhite text-center rounded-b-2xl px-10 pt-1 pb-5 space-y-1 mt-4">
            <p className="mt-2 text-2xl text-fitbitgrey">Duration</p>
            <label className="mb-4" htmlFor="textbox">
              <input
                id="textbox"
                type="number"
                placeholder="Enter minutes"
                value={selectedDuration}
                onChange={handleDurationChange}
                min="0"
                max="240"
                className="block w-full px-3 py-2 pl-10 border placeholder-main text-main rounded-full focus:outline-none focus:ring-teal-400 focus:border-teal-400 sm:text-sm"
              />
            </label>
          </div>
  
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="group relative w-full max-w-md py-2 px-4 border border-transparent text-sm font-bold text-main rounded-full bg-primaryColour hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
  

export default NewWorkoutForm;
