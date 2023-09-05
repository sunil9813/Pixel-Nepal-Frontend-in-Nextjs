import React from "react";
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { LogoText } from "../header/SearchHeader";
import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { BiAnalyse, BiChevronRight, BiTrendingUp } from "react-icons/bi";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { IoAnalyticsSharp } from "react-icons/io5";
import { GiAvoidance } from "react-icons/gi";
import { FaVoicemail } from "react-icons/fa6";
import Link from "next/link";

export const SellContentSidebar = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <Card className="h-[100vh] rounded-none shadow-xl bg-blue-gray-900 text-white shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <LogoText />
        </div>
        <List>
          <ListItem className="text-white">
            <ListItemPrefix>
              <AiOutlineDashboard size={20} />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <Accordion open={open === 1} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform text-white ${open === 1 ? "rotate-180" : ""}`} />}>
            <ListItem className="p-0 text-white" selected={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                <ListItemPrefix>
                  <BsFileEarmarkCheck size={20} className="text-white" />
                </ListItemPrefix>
                <Typography className="mr-auto font-normal text-white">Files</Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link href="/sellcontent/dashboard/notyetsubmitted">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <BiChevronRight size={20} className="text-white" />
                    </ListItemPrefix>
                    Not yet submitted
                    <ListItemSuffix>
                      <Chip value="14" size="sm" variant="ghost" className="rounded-full text-white" />
                    </ListItemSuffix>
                  </ListItem>
                </Link>
                <Link href="/sellcontent/dashboard/underrevision">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <BiChevronRight size={20} className="text-white" />
                    </ListItemPrefix>
                    Under revision
                    <ListItemSuffix>
                      <Chip value="0" size="sm" variant="ghost" className="rounded-full text-white" />
                    </ListItemSuffix>
                  </ListItem>
                </Link>
                <Link href="/sellcontent/dashboard/rejectedfiles">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <BiChevronRight size={20} className="text-white" />
                    </ListItemPrefix>
                    Rejections
                    <ListItemSuffix>
                      <Chip value="5" size="sm" variant="ghost" className="rounded-full text-white" />
                    </ListItemSuffix>
                  </ListItem>
                </Link>
                <ListItem className="text-white">
                  <ListItemPrefix>
                    <BiChevronRight size={20} className="text-white" />
                  </ListItemPrefix>
                  Published
                  <ListItemSuffix>
                    <Chip value="5" size="sm" variant="ghost" className="rounded-full text-white" />
                  </ListItemSuffix>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />}>
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3 text-white">
                <ListItemPrefix>
                  <IoAnalyticsSharp size={20} />
                </ListItemPrefix>
                <Typography className="mr-auto font-normal">Status</Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link href="/sellcontent/dashboard/income">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <BiChevronRight size={20} />
                    </ListItemPrefix>
                    General
                  </ListItem>
                </Link>
                <Link href="/sellcontent/dashboard/rankuser">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <BiChevronRight size={20} />
                    </ListItemPrefix>
                    Contributors ranking
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
          <Link href="/sellcontent/dashboard/searchtrends">
            <ListItem className="text-white">
              <ListItemPrefix>
                <BiTrendingUp size={20} />
              </ListItemPrefix>
              Search trends
            </ListItem>
          </Link>
          <Link href="/sellcontent/dashboard/invoicing">
            <ListItem className="text-white">
              <ListItemPrefix>
                <GiAvoidance size={20} />
              </ListItemPrefix>
              Invoicing and agreements
            </ListItem>
          </Link>
          <Accordion open={open === 3} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`} />}>
            <ListItem className="p-0" selected={open === 3}>
              <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3 text-white">
                <ListItemPrefix>
                  <IoAnalyticsSharp size={20} />
                </ListItemPrefix>
                <Typography className="mr-auto font-normal">Guides and information</Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link href="/sellcontent/dashboard/guidelines/vectorguidelines">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <BiChevronRight size={20} />
                    </ListItemPrefix>
                    Vector guidelines
                  </ListItem>
                </Link>
                <Link href="/sellcontent/dashboard/guidelines/psdguidelines">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <BiChevronRight size={20} />
                    </ListItemPrefix>
                    PSD guidelines
                  </ListItem>
                </Link>
                <Link href="/sellcontent/dashboard/guidelines/photoguidelines">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <BiChevronRight size={20} />
                    </ListItemPrefix>
                    Photo guidelines
                  </ListItem>
                </Link>
                <Link href="/sellcontent/dashboard/guidelines/metadataguidelines">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <BiChevronRight size={20} />
                    </ListItemPrefix>
                    Metadata guides
                  </ListItem>
                </Link>
                <Link href="/sellcontent/dashboard/guidelines/faq">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <BiChevronRight size={20} />
                    </ListItemPrefix>
                    Frequently Asked Questions
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
          <Link href="/sellcontent/dashboard/contact">
            <ListItem className="text-white">
              <ListItemPrefix>
                <FaVoicemail size={20} />
              </ListItemPrefix>
              Contact
            </ListItem>
          </Link>
          <Link href="/sellcontent/dashboard/visualtrends">
            <ListItem className="text-white">
              <ListItemPrefix>
                <BiAnalyse size={20} />
              </ListItemPrefix>
              Visual Trends 2023
              <ListItemSuffix>
                <Chip value="New" size="sm" variant="ghost" className="rounded-full text-white" />
              </ListItemSuffix>
            </ListItem>
          </Link>
          <Accordion open={open === 4} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-180" : ""}`} />}>
            <ListItem className="p-0" selected={open === 4}>
              <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3 text-white">
                <ListItemPrefix>
                  <AiOutlineUser size={20} />
                </ListItemPrefix>
                <Typography className="mr-auto font-normal">Account Setting</Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link href="/sellcontent/dashboard/user/profile">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <BiChevronRight size={20} />
                    </ListItemPrefix>
                    Profile
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
        </List>
      </Card>
    </>
  );
};
