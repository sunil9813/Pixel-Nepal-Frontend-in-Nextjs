import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { SiMaterialdesign } from "react-icons/si";
import { Accordion, AccordionHeader, AccordionBody, Button } from "@material-tailwind/react";
import { AiOutlineCrown } from "react-icons/ai";
import { RiAiGenerate } from "react-icons/ri";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsArrowClockwise, BsFileEarmarkMinus, BsPeople } from "react-icons/bs";
import { FaChalkboardUser } from "react-icons/fa6";
import { MdOutlineSmartScreen } from "react-icons/md";
import { SlScreenSmartphone } from "react-icons/sl";
import { CgScreenWide, CgStyle } from "react-icons/cg";
import { Box, ImageList, ImageListItem } from "@mui/material";

export const SearchScreen = () => {
  return (
    <>
      <section>
        <div className="flex gap-3">
          <SearchSidebar />
          <SidebarMainContent />
        </div>
      </section>
    </>
  );
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
export const SearchSidebar = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  return (
    <div className="sidebar w-1/5 pt-5 pb-8 border-r border-gray-300">
      <div className="border-b px-5 pb-3 border-gray-300 flex justify-between items-center">
        <div className="flex gap-2">
          <CiFilter size={25} />
          <span>Filters</span>
        </div>
      </div>
      <div className="px-5">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(1)} className="text-sm pr-5 font-semibold border-none">
            <div className="flex items-center gap-2">
              <SiMaterialdesign />
              <span>Asset Type</span>
            </div>
          </AccordionHeader>
          <AccordionBody className="p-0 flex flex-wrap gap-3">
            <Button variant="outlined" color="gray" size="sm">
              Vectors
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Photos
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              AI Images <span className="text-green-500">New</span>
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Icons
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Video
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              PSD
            </Button>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} icon={<Icon id={2} open={open} />} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(2)} className="text-sm pr-5 font-semibold border-none">
            <div className="flex items-center gap-2">
              <AiOutlineCrown size={20} />
              <span>License</span>
            </div>
          </AccordionHeader>
          <AccordionBody className="p-0 flex flex-wrap gap-3">
            <Button variant="outlined" color="gray" size="sm">
              Free
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              <div className="flex items-center gap-2">
                <AiOutlineCrown size={18} />
                <span>Premium</span>
              </div>
            </Button>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={3} open={open} />} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(3)} className="text-sm pr-5 font-semibold border-none">
            <div className="flex items-center gap-2">
              <RiAiGenerate size={20} />
              <span>AI Generated</span>
            </div>
          </AccordionHeader>
          <AccordionBody className="p-0 flex flex-wrap gap-3">
            <Button variant="outlined" color="gray" size="sm">
              Exclude AI Generated
            </Button>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4} icon={<Icon id={4} open={open} />} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(4)} className="text-sm pr-5 font-semibold border-none">
            <div className="flex items-center gap-2">
              <IoColorPaletteOutline size={20} />
              <span>Color</span>
            </div>
          </AccordionHeader>
          <AccordionBody className="p-0 flex flex-wrap gap-4">
            <button className="w-5 h-5 bg-white rounded-full border border-gray-400"></button>
            <button className="w-5 h-5 bg-red-500 rounded-full"></button>
            <button className="w-5 h-5 bg-yellow-500 rounded-full"></button>
            <button className="w-5 h-5 bg-purple-500 rounded-full"></button>
            <button className="w-5 h-5 bg-green-500 rounded-full"></button>
            <button className="w-5 h-5 bg-blue-500 rounded-full"></button>
            <button className="w-5 h-5 bg-gray-500 rounded-full"></button>
            <button className="w-5 h-5 bg-indigo-500 rounded-full"></button>
            <button className="w-5 h-5 bg-orange-500 rounded-full"></button>
            <button className="w-5 h-5 bg-pink-300 rounded-full"></button>
            <button className="w-5 h-5 bg-cyan-300 rounded-full"></button>
            <button className="w-5 h-5 bg-black rounded-full"></button>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 5} icon={<Icon id={5} open={open} />} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(5)} className="text-sm pr-5 font-semibold border-none">
            <div className="flex items-center gap-2">
              <BsPeople size={20} />
              <span>People</span>
            </div>
          </AccordionHeader>
          <AccordionBody className="p-0 flex flex-wrap gap-3">
            <Button variant="outlined" color="gray" size="sm">
              <div className="flex items-center gap-2">
                <FaChalkboardUser size={20} />
                <span> With people</span>
              </div>
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              <div className="flex items-center gap-2">
                <FaChalkboardUser size={20} />
                <span> No people</span>
              </div>
            </Button>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 6} icon={<Icon id={6} open={open} />} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(6)} className="text-sm pr-5 font-semibold border-none">
            <div className="flex items-center gap-2">
              <RiAiGenerate size={20} />
              <span>No of People</span>
            </div>
          </AccordionHeader>
          <AccordionBody className="p-0 flex flex-wrap gap-3">
            <Button variant="outlined" color="gray" size="sm">
              1
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              2
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              3
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              4+
            </Button>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 7} icon={<Icon id={7} open={open} />} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(7)} className="text-sm pr-5 font-semibold border-none">
            <div className="flex items-center gap-2">
              <RiAiGenerate size={20} />
              <span>Age</span>
            </div>
          </AccordionHeader>
          <AccordionBody className="p-0 flex flex-wrap gap-3">
            <Button variant="outlined" color="gray" size="sm">
              Infant
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Child
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Teen
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Young adult
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Senior
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Elder
            </Button>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 8} icon={<Icon id={8} open={open} />} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(8)} className="text-sm pr-5 font-semibold border-none">
            <div className="flex items-center gap-2">
              <RiAiGenerate size={20} />
              <span>Gender</span>
            </div>
          </AccordionHeader>
          <AccordionBody className="p-0 flex flex-wrap gap-3">
            <Button variant="outlined" color="gray" size="sm">
              Male
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Female
            </Button>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 9} icon={<Icon id={9} open={open} />} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(9)} className="text-sm pr-5 font-semibold border-none">
            <div className="flex items-center gap-2">
              <RiAiGenerate size={20} />
              <span>Ethnicity</span>
            </div>
          </AccordionHeader>
          <AccordionBody className="p-0 flex flex-wrap gap-3">
            <Button variant="outlined" color="gray" size="sm">
              South Asian
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Middle Eastern
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Eastern Asian
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Black
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Hispanic
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Indain
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              White
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Multriacial
            </Button>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 10} icon={<Icon id={10} open={open} />} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(10)} className="text-sm pr-5 font-semibold border-none">
            <div className="flex items-center gap-2">
              <BsFileEarmarkMinus size={20} />
              <span>File Type</span>
            </div>
          </AccordionHeader>
          <AccordionBody className="p-0 flex flex-wrap gap-3">
            <Button variant="outlined" color="gray" size="sm">
              JPG
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              AI
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              EPS
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              PSD files
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              SVG
            </Button>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 11} icon={<Icon id={11} open={open} />} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(11)} className="text-sm pr-5 font-semibold border-none">
            <div className="flex items-center gap-2">
              <BsArrowClockwise size={20} />
              <span>Orientation</span>
            </div>
          </AccordionHeader>
          <AccordionBody className="p-0 flex flex-wrap gap-3">
            <Button variant="outlined" color="gray" size="sm">
              <div className="flex items-center gap-2">
                <MdOutlineSmartScreen size={20} />
                <span>Horizontal</span>
              </div>
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              <div className="flex items-center gap-2">
                <SlScreenSmartphone size={20} />
                <span>Vertical</span>
              </div>
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              <div className="flex items-center gap-2">
                <SlScreenSmartphone size={20} />
                <span>Square</span>
              </div>
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              <div className="flex items-center gap-2">
                <CgScreenWide size={20} />
                <span>Panoramic</span>
              </div>
            </Button>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 12} icon={<Icon id={12} open={open} />} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(12)} className="text-sm pr-5 font-semibold border-none">
            <div className="flex items-center gap-2">
              <CgStyle size={20} />
              <span>Style</span>
            </div>
          </AccordionHeader>
          <AccordionBody className="p-0 flex flex-wrap gap-3">
            <Button variant="outlined" color="gray" size="sm">
              Watercolor
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Flat
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Cartoon
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Geometric
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Gradient
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Isometric
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Flat
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              3D
            </Button>
            <Button variant="outlined" color="gray" size="sm">
              Hard drawn
            </Button>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};
export const SidebarMainContent = () => {
  const imageList = [
    {
      image:
        "https://img.freepik.com/free-vector/furniture-shopping-app-interface_23-2148660330.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-photo/flat-lay-nutritional-counter-app_23-2149880604.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-vector/making-new-memories-travel-mobile-app_23-2148497898.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-vector/stylized-people-sending-payment-receiving-money-isolated-flat-mobile-app-template_74855-12505.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-vector/smart-home-application_23-2148627263.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-vector/app-learn-languages_52683-43478.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-vector/realistic-ui-ux-landing-page-template_52683-68898.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-photo/nutritional-counter-app-composition_23-2149880620.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-vector/charity-app-concept_23-2148608518.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-vector/covid-19-user-interface-app-mockup-vector-mobile-screen_53876-169289.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-vector/various-screens-violet-public-transport-mobile-app_23-2148704862.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-vector/workout-tracker-app-interface_23-2148653679.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-vector/beautiful-vegan-restaurant-landing-page-template-mobile_1361-899.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-vector/travel-app-screens-interface-design_23-2148602411.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-photo/nutritional-counter-app-composition_23-2149880620.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-psd/smartphone-grid-mockup_1135-284.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-vector/application-learn-languages_23-2148624202.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-vector/banking-app-interface-concept_52683-41892.jpg?size=626&ext=jpg&ga=GA1.2.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-photo/flat-lay-nutritional-counter-app-concept_23-2149880608.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais  ",
    },
    {
      image:
        "https://img.freepik.com/free-vector/workout-tracker-smartphone-app-template_23-2148627887.jpg?size=626&ext=jpg&ga=GA1.1.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/generative-ai-illustration-ui-design-chinese-food-website-with-full-screen-vibrant-colorful_58460-15355.jpg?size=626&ext=jpg&ga=GA1.2.702630499.1686130614&semt=ais",
    },
    {
      image:
        "https://img.freepik.com/free-vector/realistic-ui-ux-background_52683-69487.jpg?size=626&ext=jpg&ga=GA1.2.702630499.1686130614&semt=ais",
    },
  ];
  return (
    <div className="sidebar w-4/5 p-5">
      <Box>
        <ImageList variant="masonry" cols={4} gap={8}>
          {imageList.map((item, i) => (
            <ImageListItem key={i}>
              <img src={`${item.image}`} alt={item.image} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
};
