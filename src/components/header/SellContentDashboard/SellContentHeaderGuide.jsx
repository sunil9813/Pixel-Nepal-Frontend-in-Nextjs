import React from "react";
import { LogoText } from "../SearchHeader";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { BiChevronLeft, BiSearch } from "react-icons/bi";

export const SellContentHeaderGuide = () => {
  return (
    <>
      <section className="h-[40vh] SellContentHeaderGuide p-5">
        <Link href="/" className="flex items-center gap-2">
          <Typography variant="h2" className="text-white">
            SnapHub
          </Typography>
          <Typography variant="h2" className="font-normal text-gray-400">
            Support
          </Typography>
        </Link>

        <div className="flex items-center flex-col justify-center gap-5 mt-12">
          <Typography variant="h2" className="text-white font-normal">
            Can we help you?
          </Typography>

          <form className="w-2/5">
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <BiSearch size={25} />
              </div>
              <input type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 outline-none" placeholder="Search ..." required />
            </div>
          </form>
        </div>

        <Link href="/sellcontent/dashboard" className="text-white flex items-center mt-5 -ml-2">
          <BiChevronLeft size={25} />
          <span className="text-sm">Go to Dashboard</span>
        </Link>
      </section>
    </>
  );
};
