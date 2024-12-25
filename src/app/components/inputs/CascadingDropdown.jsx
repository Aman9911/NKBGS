import React from "react";
const CascadingDropdown = ({ label, options, handleCategoryChange }) => {
  return (
    <div className="p-2 max-w-md mx-2">
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <select
          onChange={handleCategoryChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        >
          <option value="">Select a {label}</option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CascadingDropdown;
