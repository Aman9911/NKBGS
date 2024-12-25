"use client";
import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const Editor = ({ onChange, content }) => {
  const editor = useRef(null);
  return (
    <JoditEditor
      ref={editor}
      value={content}
      tabIndex={1} // tabIndex of textarea
      onChange={(newContent) => onChange(newContent)}
    />
  );
};
export default Editor;