"use client";
import Link from "next/link";
import { usePathname  } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname  = usePathname ();
  console.log(pathname)
  return (
    <div className="flex items-center flex-row lg:flex-col gap-3 lg:gap-4">
      <Link
        href="/"
        className={`inline-flex flex-col items-center justify-center gap-1 w-14 lg:w-full xl:w-16 h-14 xl:h-16 text-white ${
          pathname === "/" ? "bg-purple-700" : "bg-dark"
        } hover:bg-purple-700 rounded-lg transition duration-300`}
      >
        <i className="fa-solid fa-address-card"></i>
        <span className="block text-[10px] lg:text-xs font-medium">About</span>
      </Link>
      <Link
        href="/resume"
        className={`inline-flex flex-col items-center justify-center gap-1 w-14 lg:w-full xl:w-16 h-14 xl:h-16 text-white ${
            pathname === "/resume" ? "bg-purple-700" : "bg-dark"
          } hover:bg-purple-700 rounded-lg transition duration-300`}
      >
        <i className="fa-solid fa-file-lines"></i>
        <span className="block text-[10px] lg:text-xs font-medium">Resume</span>
      </Link>
      <Link
        href="/work"
        className={`inline-flex flex-col items-center justify-center gap-1 w-14 lg:w-full xl:w-16 h-14 xl:h-16 text-white ${
          pathname === "/work" ? "bg-purple-700" : "bg-dark"
        } hover:bg-purple-700 rounded-lg transition duration-300`}
      >
        <i className="fa-solid fa-briefcase"></i>
        <span className="block text-[10px] lg:text-xs font-medium">Work</span>
      </Link>
      <Link
        href="/contact"
        className={`inline-flex flex-col items-center justify-center gap-1 w-14 lg:w-full xl:w-16 h-14 xl:h-16 text-white ${
          pathname === "/contact" ? "bg-purple-700" : "bg-dark"
        } hover:bg-purple-700 rounded-lg transition duration-300`}
      >
        <i className="fa-solid fa-address-book"></i>
        <span className="block text-[10px] lg:text-xs font-medium">Contact</span>
      </Link>
    </div>
  );
};

export default Navbar;
