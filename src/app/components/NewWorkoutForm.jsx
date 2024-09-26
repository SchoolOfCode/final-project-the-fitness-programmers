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
    >
      <label
        htmlFor="dropdown"
        className="flex justify-center mb-4 w-full"
      >
        <select
          className="w-full py-2 rounded-full"
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
      <label className="mb-4" htmlFor="textbox">
        <input
          id="textbox"
          type="number"
          placeholder="Enter minutes"
          value={selectedDuration}
          onChange={handleDurationChange}
          min="0"
          max="240"
          className="mb-4 block w-full px-3 py-2 pl-10 border  placeholder-primaryColour text-purple rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 focus:z-10 sm:text-sm block"
        />
      </label>
      <div className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-teal-300 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NewWorkoutForm;
