"use client";
import { useEffect } from "react";

const ImageUpload = ({ onChange, value, visible = false }) => {
  const handleChange = (event) => {
    const file = event.target.files[0];
    onChange(file);
  };

  useEffect(() => {
    onChange(value);
  }, [onChange,value]);

  return (
    <>
      <input
        type="file"
        className="text-sm text-grey-500
            file:mr-5 file:py-3 file:px-10
            file:rounded-full file:border-0
            file:text-md file:font-semibold  file:text-white
            file:bg-indigo-600
            hover:file:cursor-pointer hover:file:opacity-80"
        onChange={handleChange}
      />
      {visible && (
        <p
          className="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="file_input_help"
        >
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>
      )}
    </>
  );
};

export default ImageUpload;
