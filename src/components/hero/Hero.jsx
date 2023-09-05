import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { SearchScreen } from "@/routes";

export const Hero = () => {
  return (
    <>
      {/* <section className="bg-color"> */}
      <section className=" bg-cyan-500">
        <div className="w-3/5 py-12 m-auto text-white text-center">
          <h2 className="text-4xl font-semibold leading-loose">All the assets you need, in one place</h2>
          <h4 className="text-xl">Find and download the best high-quality photos, vectors, videos, and mockups</h4>
          <div className="mt-12">
            <SearchBox color="bg-white" shadow="shadow-lg" />
          </div>
        </div>
        <div className="card_content py-16 flex justify-center items-center">
          <div className="cards flex gap-8">
            <Card title="Portrait" image="/images/background/category/portrait.jpg" />
            <Card title="Newborn" image="/images/background/category/newborn.jpg" />
            <Card title="Wedding" image="/images/background/category/wedding.jpg" />
            <Card title="Nature" image="/images/background/category/nature.jpg" />
            <Card title="Maternity" image="/images/background/category/maternity.jpg" />
          </div>
        </div>
      </section>
      <div className=" bg-cyan-100 flex items-center justify-center gap-5 py-3">
        <p>Create an account to enjoy more free downloads</p>
        <Button size="lg" className="bg-cyan-800" color="cyan">
          Sign up for free
        </Button>
      </div>
    </>
  );
};

export const SearchBox = ({ color, shadow }) => {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className={`${color} relative flex w-full rounded-md border border-gray-300 ${shadow} p-3`}>
        <Input
          type="text"
          placeholder="Search all assets"
          className="border-none w-full"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          containerProps={{
            className: "min-w-0",
          }}
          icon={
            <Link href="/search">
              <BiSearch size={25} />
            </Link>
          }
        />
      </div>
    </div>
  );
};

export const Card = ({ title, image }) => {
  return (
    <div className="card text-center">
      <div className="image w-60 h-40 overflow-hidden border-[3px] border-[rgba(255,255,255,0.6)] rounded-xl">
        {image && (
          <img
            src={image}
            alt="title"
            className="object-cover w-full h-full p-1 rounded-xl transition ease-in-out duration-300 hover:scale-125 hover:rotate-6"
          />
        )}
      </div>
      <h2 className="capitalize mt-5 text-white">{title}</h2>
    </div>
  );
};
