import React from "react";

const RadioButton = ({ name, id, options, required, register }) => {
  return (
    <div className="flex flex-row w-full gap-4 text-gray-950 font-normal text-sm md:text-lg">
      <h1>{name}</h1>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={id}
            value={option.value}
            {...register(id, { required })}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
