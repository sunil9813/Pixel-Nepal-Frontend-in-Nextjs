import { guidelinesdataFaq } from "@/data/dummydata";
import { Typography, Accordion, AccordionHeader, AccordionBody, Button } from "@material-tailwind/react";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const FAQGuidelines = () => {
  return (
    <>
      <section className="w-3/4 m-auto py-12">
        <div className="flex justify-between items-center gap-6 mb-10">
          <div className="w-full h-1 bg-gray-300"></div>
          <Typography variant="h3" className="font-normal">
            Contributor
          </Typography>
          <div className="w-full h-1 bg-gray-300"></div>
        </div>
        <AccordionCustomStyles />

        <div className="flex justify-center items-center gap-5 flex-col mt-5 pt-8">
          <Typography variant="body">Can't find an answer to your question?</Typography>
          <Button variant="outlined" className=" flex items-center gap-3">
            Submit a request
            <HiOutlineArrowNarrowRight size={20} />
          </Button>
        </div>
      </section>
    </>
  );
};

export const AccordionCustomStyles = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      {guidelinesdataFaq.map((data, i) => (
        <Accordion open={open === i} className="mb-5 px-4 py-2 shadow-shadow1">
          <AccordionHeader onClick={() => handleOpen(i)} className={`border-b-0 transition-colors font-normal text-md`}>
            {data.title}
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base">
            {data.desc.map((txt) => (
              <p className="text-indigo-500 text-sm leading-10">{txt.text}</p>
            ))}
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
};
