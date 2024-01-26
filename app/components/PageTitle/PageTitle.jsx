import { Roboto_Slab } from "next/font/google";
import React from "react";

const roboto_slab = Roboto_Slab({ subsets: ["latin"] });

const PageTitle = ({ title }) => {
  return (
    <div className="relative mb-8">
      <h2
        className={`relative inline-block text-3xl lg:text-4xl font-bold text-white ${roboto_slab.className} after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-blue-500 after:rounded-lg`}
      >
        {title}
      </h2>
    </div>
  );
};

export default PageTitle;
