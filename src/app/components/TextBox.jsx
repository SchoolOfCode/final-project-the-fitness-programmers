import React, { useState } from 'react';

function TextBox({ label, placeholder, onValueChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onValueChange(value);
  };

  return (
    <div>
      <label htmlFor="textbox">{label}</label>
      <input
        id="textbox"
        type="number"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        min={0}
        className="block w-full px-3 py-2 pl-10 border border-gray-300 text-purple rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 focus:z-10 sm:text-sm block"      />
    
    </div>
  );
}

export default TextBox;