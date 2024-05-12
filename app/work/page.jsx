import React from "react";
import AppWrapper from "../components/AppWrapper/AppWrapper";
import PageTitle from "../components/PageTitle/PageTitle";
import Link from "next/link";
import Image from "next/image";

const Work = () => {
  return (
    <AppWrapper>
      <div className="relative w-full">
        <div className="relative w-full p-5 md:p-12">
          <PageTitle title="Portfolio" />

          <div className="grid grid-cols-12 gap-y-8">
            <div className="grid grid-cols-12 gap-5 col-span-12">
              <div className="relative col-span-12">
                <h4 className="text-white text-xl font-semibold ">
                  Crypto Wallet
                </h4>
                <p className="text-sm font-light">
                  I specialize in crafting mobile apps, particularly a crypto
                  wallet with seamless swap functionality, all built using React
                  Native Expo for a smooth and efficient user experience.
                </p>
              </div>
              <div className="relative col-span-12 md:col-span-6 lg:col-span-6">
                <Link
                  href="#"
                  className="block w-full h-full p-0.5 bg-white hover:bg-purple-700 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <Image
                    src="/images/work/wallet-home.png"
                    alt="crypto wallet"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-xl overflow-hidden"
                  />
                </Link>
              </div>
              <div className="relative col-span-12 md:col-span-6 lg:col-span-6">
                <Link
                  href="#"
                  className="block w-full h-full p-0.5 bg-white hover:bg-purple-700 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <Image
                    src="/images/work/wallet-swap.png"
                    alt="crypto wallet"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-xl overflow-hidden"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};

export default Work;
