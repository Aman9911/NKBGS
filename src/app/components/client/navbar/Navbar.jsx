"use client";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import NavLinks from "./NavLinks";
import logo from "../../../../../public/logo.png";
import { IoClose, IoMenu } from "react-icons/io5";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "900",
  display: "swap",
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState({
    classNames: "bg-blue-200 hover:bg-blue-300 ",
  });
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow({ classNames: "-translate-y-72" });
      } else {
        setShow({ classNames: " bg-blue-200" });
      }
    } else {
      setShow({ classNames: "bg-blue-200 hover:bg-blue-300 " });
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, controlNavbar]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <header
        className={classNames(
          `fixed z-50 left-0   w-full top-0 ease transition-all duration-700 ${
            open ? "" : show.classNames
          }`
        )}
      >
        <nav className="lg:flex justify-between items-center w-[92%] lg:w-full mx-auto xl:w-[95%] ">
          <div className="flex justify-between items-center">
            <Link
              href={"/"}
              className="flex justify-center items-center lg:ml-10"
            >
              <Image
                alt="Logo"
                src={logo}
                width={90}
                height={90}
                priority={true}
                className="lg:w-auto md:w-[25%] z-50 h-auto w-[25%] "
              ></Image>

              <div
                className={`flex-col place-items-end w-full z-50 md:text-center md:pt-2 ${roboto.className}`}
              >
                <h2 className="text-xl lg:text-3xl md:text-2xl text-left w-full font-bold whitespace-nowrap">
                  N.K Bagrodia
                </h2>
                <h2 className="text-xl lg:text-3xl md:text-2xl text-left w-full font-bold whitespace-nowrap">
                  Global School
                </h2>
              </div>
            </Link>
            <div
              className="text-3xl lg:hidden z-50 right-2 fixed"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <IoClose className="cursor-pointer" />
              ) : (
                <IoMenu className="cursor-pointer" />
              )}
            </div>

            <div className=" xl:whitespace-nowrap xl:ml-[10%] ">
              {/* Desktop Nav */}
              <ul className=" lg:flex hidden uppercase items-center">
                <li>
                  <Link
                    className="py-6 px-6 font-semibold inline-block "
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>
                <NavLinks />
              </ul>
              {/* Mobile Nav */}
              <ul
                className={`lg:hidden bg-white fixed w-full md:pt-28 top-0 py-16 ml-0 h-full pl-4 overflow-y-auto duration-500 ${
                  open ? "left-0" : "left-[-100%]"
                }`}
              >
                <li>
                  <Link
                    className="py-6 px-3 inline-block font-semibold"
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>
                <NavLinks open={open} setOpen={setOpen} />
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default memo(Navbar);
