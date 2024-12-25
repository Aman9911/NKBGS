import React from "react";
import AdminNav from "@/app/components/AdminNav";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <AdminNav>{children}</AdminNav>
    </div>
  );
};

export default DashboardLayout;
