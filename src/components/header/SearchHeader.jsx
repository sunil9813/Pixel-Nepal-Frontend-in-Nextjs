import React from "react";
import { AccessLink, NavList } from "./Header";
import { SearchBox } from "../hero/Hero";
import Link from "next/link";

export const SearchHeader = () => {
  return (
    <>
      <section className="header">
        <div className="bg-blue-gray-900 py-3 text-white px-5">
          <div className="flex justify-between items-center">
            <NavList />
            <AccessLink />
          </div>
        </div>
        <div className="px-5 flex items-center justify-between border border-gray-300">
          <div className="logo mr-8">
            <LogoText />
          </div>
          <div className="w-full py-2">
            <SearchBox color="bg-[rgba(0,0,0,0.08)]" />
          </div>
        </div>
      </section>
      <section className="ad mt-3 mx-5 bg-gray-300 h-[20vh] flex items-center justify-center rounded-lg">
        <h2 className="text-5xl font-semibold text-center">विज्ञापन</h2>
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
