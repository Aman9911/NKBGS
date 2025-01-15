import React from "react";

const SelectBox = ({
  options,
  label,
  onChange,
  register,
  errors,
  id,
  classname,
  required,
}) => {
  return (
    <div className="mb-4">
      <label
        className={`inline-block text-gray-700 text-sm md:text-lg font-bold mb-2 mr-2 ${classname}`}
      >
        {label}
      </label>
      <select
        className={`inline-block  bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 ${
          errors[id] ? "border-rose-500" : "border-neutral-300"
        } ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}`}
        onChange={onChange}
        {...register(id, { required })}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
