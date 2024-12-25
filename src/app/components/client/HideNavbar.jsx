"use client";
import { usePathname } from "next/navigation";

const HideNavbar = ({ children }) => {
  const path = usePathname();
  const show = !path.startsWith("/admin");
  return show ? children : null;
};

export default HideNavbar;
