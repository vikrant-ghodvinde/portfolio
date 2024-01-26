import React from "react";
import Header from "../Header/Header";
import UserInfo from "../UserInfo/UserInfo";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const AppWrapper = ({ children }) => {
  return (
    <div className="relative w-full py-16 max-w-[1400px] px-4 mx-auto">
      <div className="relative w-full mb-20 lg:mb-52">
        <Header />
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="relative col-span-12 lg:col-span-3 xl:col-span-3">
          <div className="relative w-full lg:sticky lg:top-3 bg-black p-5 rounded-2xl">
            <UserInfo />
          </div>
        </div>
        <div className="relative col-span-12 lg:col-span-7 xl:col-span-8">
          <div className="relative bg-black p-5 rounded-2xl">
            {children}
            <Footer />
          </div>
        </div>
        <div className="relative col-span-12 lg:col-span-2 xl:col-span-1 order-first lg:order-last text-center lg:text-start">
          <div className="relative inline-block w-auto lg:w-full lg:sticky lg:top-3 bg-black p-4 rounded-2xl">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrapper;
