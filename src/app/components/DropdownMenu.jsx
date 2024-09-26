import React, { useState } from 'react';

function DropdownMenu({ label, options }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">{label}</label>
      <select id="dropdown" value={selectedOption} onChange={handleSelectChange} className="block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-full focus:outline-none focus:ring-teal-400 focus:border-teal-400">
        <option value="">-- Select an option --</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      
    </div>
  );
}

export default DropdownMenu;