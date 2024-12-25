import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative bg-slate-600 text-white">
      <div className="lg:flex ">
        <div className="lg:w-[55%] lg:ml-2 lg:mt-3">
          <div className="flex justify-center items-center md:justify-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={90}
              height={0}
              className="lg:w-[12%] lg:h-[30%] w-[15%]"
            />
            <div className="flex justify-center  md:w-auto  lg:justify-normal gap-2 md:justify-center">
              <h1 className="lg:text-2xl md:text-3xl   text-left font-bold  text-base lg:gap-0 lg:flex-col ">
                <span className="block ">N.K Bagrodia </span>
                <span className="block ">Global School</span>
              </h1>
              <h1 className="lg:text-lg md:text-lg  leading-6 text-left text-[11px]">
                <p className="lg:block lg:pt-1 lg:pl-2 md:pt-2">
                  Sector-17, Phase-II, DWARKA
                </p>
                <p className="lg:block lg:pt-1 lg:pl-2 md:pt-2">
                  NEW DELHI- 110078 (INDIA)
                </p>
              </h1>
            </div>
          </div>
          <div className="text-center leading-4 text-[11px] md:text-lg md:text-right md:mr-[11%]">
            <p>E-mail:nkbglobalschool@gmail.com</p>
            <p>Phone: +91-11-42801001, 42801002</p>
          </div>
        </div>
        <hr className="mx-10" />
        <div className="lg:w-[60%] text-center border-solid lg:flex lg:justify-center pt-1 gap-20 ">
          <div className="flex flex-col leading-8">
            <Link href="/contactUs">Contact Us</Link>
            <Link href="/parentsFeedback">Parent&apos;s Feedback</Link>
            <a>CBSE Links</a>
            <a>Syllabus - Classes(PS-XII)</a>
          </div>
          <div className="flex flex-col leading-8 ">
            <Link href="/cbseResult-X">Class X CBSE Result</Link>
            <Link href="/cbseResult-XII">Class XII CBSE Result</Link>
            <Link href="/infrastructure/TRANSPORT">Transport</Link>
            <Link href="/gallery/photo">Photo Gallery</Link>
          </div>
        </div>
      </div>
      <hr className="mx-10" />
      <div className="flex justify-center items-center gap-2 pb-2 pt-2 bg-slate-700">
        <span className=" flex justify-center items-center h-[50px] w-[50px] border bg-black/30 rounded-full cursor-pointer transition-all hover:shadow-[0_0_0.625em_rgba(255,_0,_132,_0.9)] hover:text-pink-600 ">
          <FaFacebookF />
        </span>
        <span className=" flex justify-center items-center h-[50px] w-[50px] border bg-black/30 rounded-full cursor-pointer transition-all hover:shadow-[0_0_0.625em_rgba(255,_0,_132,_0.9)] hover:text-pink-600 ">
          <FaInstagram />
        </span>
        <span className=" flex justify-center items-center h-[50px] w-[50px] border bg-black/30 rounded-full cursor-pointer transition-all hover:shadow-[0_0_0.625em_rgba(255,_0,_132,_0.9)] hover:text-pink-600 ">
          <FaTwitter />
        </span>
        <span className=" flex justify-center items-center h-[50px] w-[50px] border bg-black/30 rounded-full cursor-pointer transition-all hover:shadow-[0_0_0.625em_rgba(255,_0,_132,_0.9)] hover:text-pink-600 ">
          <FaLinkedin />
        </span>
        <span className=" flex justify-center items-center h-[50px] w-[50px] border bg-black/30 rounded-full cursor-pointer transition-all hover:shadow-[0_0_0.625em_rgba(255,_0,_132,_0.9)] hover:text-pink-600 ">
          <Link
            href="https://www.youtube.com/channel/UCdPTUiOWTilDjW55OlMAWCA"
            target="_blank"
          >
            <FaYoutube />
          </Link>
        </span>
      </div>
      <hr className="mx-10" />
      <div className="text-center p-2  bg-slate-800 ">
        &copy;2023 Copyright:NKBGS
      </div>
    </div>
  );
};

export default Footer;
