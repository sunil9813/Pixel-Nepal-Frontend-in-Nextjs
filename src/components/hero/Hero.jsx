import React from "react";
import { Input, Menu, MenuHandler, MenuList, MenuItem, Checkbox, Button } from "@material-tailwind/react";
import { BiSearch } from "react-icons/bi";
import { BsUiChecksGrid } from "react-icons/bs";
import { IoImagesOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <section className="bg-indigo-500">
        <div className="w-3/5 py-12 m-auto text-white text-center">
          <h2 className="text-4xl font-semibold leading-loose">All the assets you need, in one place</h2>
          <h4 className="text-xl">Find and download the best high-quality photos, vectors, videos, and mockups</h4>
          <div className="mt-12">
            <SearchBox color="bg-white" shadow="shadow-lg" />
          </div>
        </div>
        <div className="card_content py-16 flex justify-center items-center">
          <div className="cards flex gap-8">
            <Card title="Vectors" image="images/vector.jpg" />
            <Card title="photo" image="images/photo.jpeg" />
            <Card title="video" image="images/photo.avif" />
            <Card title="PSD" image="images/psd.jpg" />
            <Card title="Template" image="images/temp.avif" />
          </div>
        </div>
      </section>
      <div className="bg-indigo-100 flex items-center justify-center gap-5 py-3">
        <p>Create an account to enjoy more free downloads</p>
        <Button size="lg" color="indigo">
          Sign up for free
        </Button>
      </div>
    </>
  );
};

export const SearchBox = ({ color, shadow }) => {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className={`${color} relative flex w-full rounded-md border border-gray-300 ${shadow}`}>
        <Menu placement="bottom-start">
          <MenuHandler>
            <button variant="text" className="flex h-14 w-56 items-center justify-between gap-2 text-black px-5 text-sm  border-r border-gray-300">
              <div className="flex items-center gap-3">
                <BsUiChecksGrid size={15} />
                Assets
              </div>
              <div className="">
                <MdKeyboardArrowDown size={20} />
              </div>
            </button>
          </MenuHandler>
          <MenuList className="w-40 p-0 py-3 h-auto">
            <MenuItem className="flex items-center gap-3">
              <BsUiChecksGrid size={15} />
              Assets
            </MenuItem>
            <MenuItem className="flex items-center gap-3">
              <BsUiChecksGrid size={15} />
              Collection
            </MenuItem>
            <MenuItem className="flex items-center gap-3">
              <BsUiChecksGrid size={15} />
              Vector
            </MenuItem>
            <MenuItem className="flex items-center gap-3">
              <BsUiChecksGrid size={15} />
              Photo
            </MenuItem>
            <MenuItem className="flex items-center gap-3">
              <BsUiChecksGrid size={15} />
              AI Images
            </MenuItem>
            <MenuItem className="flex items-center gap-3">
              <BsUiChecksGrid size={15} />
              Video
            </MenuItem>
            <MenuItem className="flex items-center gap-3">
              <BsUiChecksGrid size={15} />
              PSD
            </MenuItem>
            <MenuItem className="flex items-center gap-3">
              <BsUiChecksGrid size={15} />
              Icons
            </MenuItem>
            <hr className="my-2" />
            <MenuItem className="flex items-center gap-3">
              <input type="checkbox" />
              <span>Free</span>
            </MenuItem>
            <MenuItem className="flex items-center gap-3">
              <Checkbox
                label="Premium"
                id="vertical-list-react"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0 pr-3",
                }}
              />
            </MenuItem>
          </MenuList>
        </Menu>
        <Input
          type="text"
          placeholder="Search all assets"
          className="border-none w-full pt-6"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          containerProps={{
            className: "min-w-0",
          }}
          icon={
            <Link href="/search">
              <BiSearch size={25} className="mt-2" />
            </Link>
          }
        />
      </div>
      <div className={`${color} w-56 flex h-14 items-center gap-2 text-black px-5 text-sm rounded-md border border-gray-300 ${shadow}`}>
        <button className="flex items-center justify-center gap-3">
          <IoImagesOutline size={20} />
          <span className="text-[12px]">Search By Images</span>
        </button>
      </div>
    </div>
  );
};

export const Card = ({ title, image }) => {
  return (
    <div className="card text-center">
      <div className="image w-60 h-40 overflow-hidden border-[3px] border-[rgba(255,255,255,0.6)] rounded-xl">
        {image && <img src={image} alt="title" className="object-cover w-full h-full p-1 rounded-xl transition ease-in-out duration-300 hover:scale-125 hover:rotate-6" />}
      </div>
      <h2 className="capitalize mt-5 text-white">{title}</h2>
    </div>
  );
};
