'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

export default function ClientOnlyAOS() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: false,
      mirror: false,
      offset: 100,
    });

    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);

    setTimeout(() => {
      AOS.refresh();
    }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]); 

  return null; 
}
