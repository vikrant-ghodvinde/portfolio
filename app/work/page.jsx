import React from "react";
import AppWrapper from "../components/AppWrapper/AppWrapper";
import PageTitle from "../components/PageTitle/PageTitle";
import Image from "next/image";

const Work = () => {
  return (
    <AppWrapper>
      <div className="relative w-full">
        <div className="relative w-full p-5 md:p-12">
          <PageTitle title="Portfolio" />

          <div className="grid grid-cols-12 gap-y-8 lg:gap-8">
            <div className="col-span-12 md:col-span-6">
              <div className="relative w-full space-y-5">
                <div className="block group w-full h-full border-2 border-white hover:border-purple-700 rounded-xl overflow-hidden transition-all duration-300">
                  <Image
                    src="/images/work/wallet-home.png"
                    alt="Crypto Wallet"
                    width={500}
                    height={500}
                    unoptimized
                    className="w-full h-full object-cover rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="relative w-full space-y-2">
                  <h4 className="text-white text-xl font-semibold ">
                    Crypto Wallet
                  </h4>
                  <p className="text-sm font-light line-clamp-2">
                    I specialize in crafting mobile apps, particularly a crypto
                    wallet with seamless swap functionality, all built using
                    React Native Expo for a smooth and efficient user
                    experience.
                  </p>
                  <button type="button" className="inline-flex items-center gap-2 text-xs text-purple-700 hover:text-white transition-all duration-300">
                    Read More <i className="fa-solid fa-chevron-right text-[10px]"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};

export default Work;
