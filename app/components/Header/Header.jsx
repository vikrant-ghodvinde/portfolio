import { Cedarville_Cursive } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const cursive = Cedarville_Cursive({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  return (
    <div className="relative w-full">
      <Link href="/" className={cursive.className}>
        <h3 className="text-4xl font-medium bg-primary-gradient bg-clip-text text-transparent py-2">Vicky</h3>
      </Link>
    </div>
  );
};

export default Header;
