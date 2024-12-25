import React from "react";
import GalleryNav from "@/app/components/client/navbar/GalleryNav";

const GalleryLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <GalleryNav/>{children}
    </div>
  );
};

export default GalleryLayout;
