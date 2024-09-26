import React, { useState } from 'react';

function DateInput({ label, onDateChange }) {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div>
      <label htmlFor="date-picker">{label}</label>
      <input
        id="date-picker"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="w-full p-2 bg-white border border-gray-300 rounded-full text-gray-700 cursor-pointer focus:outline-none focus:outline-none focus:ring-teal-400 focus:border-teal-400 hover:bg-gray-100 transition duration-300"
      />
    </div>
  );
}

export default DateInput;