import { Roboto_Slab } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

const UserInfo = () => {
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 gap-6">
        <div className="relative group w-full max-w-60 max-h-60 mx-auto lg:-mt-36 overflow-hidden rounded-2xl">
          <Image
            src="/images/user.webp"
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-500"
          />
        </div>
        <div className="relative w-full flex flex-col items-center justify-center gap-3">
          <h1
            className={`text-2xl font-bold text-white text-center ${robotoSlab.className}`}
          >
            Vikrant Ghodvinde
          </h1>
          <div className="inline-block relative py-2 px-5 bg-dark text-sm font-medium rounded-md">
            Full Stack Developer
          </div>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <Link
              href="https://github.com/vikrant-ghodvinde"
              target="_blank"
              className="inline-flex items-center justify-center p-2 relative w-9 h-9 text-md text-white hover:text-black bg-dark hover:bg-white rounded-md transition duration-300"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/vikrant-ghodvinde-2224a1287/"
              target="_blank"
              className="inline-flex items-center justify-center p-2 relative w-9 h-9 text-md text-white hover:text-black bg-dark hover:bg-white rounded-md transition duration-300"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link
              href="https://twitter.com/GhodvindeVicky"
              target="_blank"
              className="inline-flex items-center justify-center p-2 relative w-9 h-9 text-md text-white hover:text-black bg-dark hover:bg-white rounded-md transition duration-300"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link
              href="https://www.instagram.com/vicky027_"
              target="_blank"
              className="inline-flex items-center justify-center p-2 relative w-9 h-9 text-md text-white hover:text-black bg-dark hover:bg-white rounded-md transition duration-300"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link
              href="https://www.facebook.com/Vickys2707"
              target="_blank"
              className="inline-flex items-center justify-center p-2 relative w-9 h-9 text-md text-white hover:text-black bg-dark hover:bg-white rounded-md transition duration-300"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
          </div>
        </div>
        <div className="relative w-full bg-dark rounded-2xl p-4">
          <div className="relative w-full py-2 border-b last:border-0 border-secondary-dark flex items-center gap-2">
            <div className="relative w-12 min-w-12 h-12 bg-black inline-flex items-center justify-center p-2 rounded-lg text-xl text-white">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div className="relative">
              <p className="text-xs text-purple-700">WhatsApp</p>
              <span className="block text-sm text-white font-medium break-all">
                +91 7038486826
              </span>
            </div>
          </div>
          <div className="relative w-full py-2 border-b last:border-0 border-secondary-dark flex items-center gap-2">
            <div className="relative w-12 min-w-12 h-12 bg-black inline-flex items-center justify-center p-2 rounded-lg text-xl text-white">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="relative">
              <p className="text-xs text-purple-700">Email</p>
              <span className="block text-sm text-white font-medium break-all">
                ghodvinde227@gmail.com
              </span>
            </div>
          </div>
          <div className="relative w-full py-2 border-b last:border-0 border-secondary-dark flex items-center gap-2">
            <div className="relative w-12 min-w-12 h-12 bg-black inline-flex items-center justify-center p-2 rounded-lg text-xl text-white">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="relative">
              <p className="text-xs text-purple-700">Location</p>
              <span className="block text-sm text-white font-medium break-all">
                Mumbai, India
              </span>
            </div>
          </div>
          <div className="relative w-full py-2 border-b last:border-0 border-secondary-dark flex items-center gap-2">
            <div className="relative w-12 min-w-12 h-12 bg-black inline-flex items-center justify-center p-2 rounded-lg text-xl text-white">
              <i className="fa-regular fa-calendar-days"></i>
            </div>
            <div className="relative">
              <p className="text-xs text-purple-700">Birthday</p>
              <span className="block text-sm text-white font-medium break-all">
                July 27, 2000
              </span>
            </div>
          </div>
        </div>
        <div className="relative w-full text-center">
          <Link
            href="/assets/cv/vikrant-ghodvinde-cv.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 py-3 px-7 text-white font-medium bg-purple-700 hover:bg-dark rounded-lg transition duration-300"
          >
            <i className="fa-solid fa-download"></i> Download CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
