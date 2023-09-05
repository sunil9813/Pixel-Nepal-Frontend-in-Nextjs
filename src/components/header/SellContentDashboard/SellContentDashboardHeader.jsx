import React, { useState } from "react";
import { UserProfileAfterLogin } from "../Header";
import { Drawer, Typography, Accordion, AccordionHeader, AccordionBody, ListItemPrefix } from "@material-tailwind/react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { BsDot, BsFiletypePsd, BsImages, BsUiChecksGrid } from "react-icons/bs";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { BiTimeFive } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";

export const SellContentDashboardHeader = () => {
  return (
    <>
      <div className="sell-content-header sticky top-0 left-0 bg-white z-50 shadow-md px-5 py-2.5 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="logo flex gap-1 items-center">
              <UploadContent />
            </div>
          </div>
          <div className="account flex items-center gap-3">
            <BiTimeFive size={25} />
            <IoNotificationsOutline size={25} />
            <UserProfileAfterLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export const UploadContent = () => {
  const [openRight, setOpenRight] = useState(false);
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const rulesData = [
    {
      id: 1,
      title: "Vectors",
      icon: <LiaVectorSquareSolid size={25} />,
      text: [
        {
          title: "EPS and a JPG preview file (with the same name) between 0.5MB and 80MB",
        },
        { title: "Preview files must be between 2000px and 10000px on any of the sides." },
        { title: "RGB color" },
      ],
    },
    {
      id: 2,
      title: "PSD",
      icon: <BsFiletypePsd size={20} />,
      text: [
        {
          title: "PSD between 1.5MB and 250MB and a JPG preview file (with the same name and filesize between 0.5MB and 80MB)",
        },
        { title: "Preview files must be between 2000px and 10000px on any of the sides." },
        { title: "Color: sRGB, Adobe RGB, Prophoto RGB or P3" },
      ],
    },
    {
      id: 3,
      title: "Photos",
      icon: <BsImages size={20} />,
      text: [
        {
          title: "Only JPG files Over 0.5MB, up to 80MB",
        },
        { title: "Photos must be between 2000px and 10000px on any of the sides." },
        { title: "Color: sRGB, Adobe RGB, Prophoto RGB or P3" },
      ],
    },
  ];
  return (
    <>
      <button onClick={openDrawerRight} className="primary-btn px-6 py-2.5 rounded-md flex items-center gap-2">
        <AiOutlineCloudUpload size={18} />
        <span>Upload Files</span>
      </button>

      <Drawer placement="right" className="shadow-xl" open={openRight} overlay={false} size={400}>
        <div className="py-2.5 bg-blue-gray-50 flex gap-4 items-center px-2">
          <button className="primary-btn p-2.5 rounded-md flex items-center gap-2" onClick={closeDrawerRight} onClose={closeDrawerRight}>
            <RxCross2 size={20} />
          </button>
          <Typography variant="h6" className="font-normal relative">
            Upload Files
          </Typography>
        </div>
        <Accordion open={open === 1} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}>
          <AccordionHeader onClick={() => handleOpen(1)} className="px-4 py-3">
            <ListItemPrefix>
              <BsUiChecksGrid size={20} />
            </ListItemPrefix>
            <Typography className="mr-auto font-normal">Technical requirements</Typography>
          </AccordionHeader>
          <AccordionBody className="p-4">
            {rulesData.map((item) => (
              <div className="mb-3" key={item.id}>
                <div className="flex items-center gap-2">
                  <span>{item?.icon}</span>
                  <span>{item?.title}</span>
                </div>
                <ul className="ml-2">
                  {item?.text?.map((title) => (
                    <li className="flex items-center mt-2">
                      <span>
                        <BsDot size={30} />
                      </span>
                      <div className="text-[12px]">{title.title}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </AccordionBody>
        </Accordion>

        <div className="flex items-center justify-center w-full p-4">
          <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </Drawer>
    </>
  );
};
