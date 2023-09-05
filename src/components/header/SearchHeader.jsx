import React from "react";
import { SearchBox } from "../hero/Hero";
import Link from "next/link";
import { LogoImg } from "./Header";

export const SearchHeader = () => {
  return (
    <>
      <section className="header">
        <div className="px-5 flex items-center justify-between border border-gray-300">
          <div className="logo mr-8 flex justify-center items-center">
            <LogoImg />
          </div>
          <div className="w-full py-2">
            <SearchBox color="bg-[rgba(0,0,0,0.08)]" />
          </div>
        </div>
      </section>
    </>
  );
};
export const LogoText = () => {
  return (
    <Link href="/">
      <h3 className="text-primary font-medium text-2xl">SnapHub</h3>
    </Link>
  );
};
