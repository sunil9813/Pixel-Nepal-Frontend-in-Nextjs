import { guidelinesdata3 } from "@/data/dummydata";
import { SellContentDashboardGuideLayout } from "@/routes";
import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const MetaGuidelines = () => {
  return (
    <>
      <SellContentDashboardGuideLayout>
        <VectorGuidelinesContent />
      </SellContentDashboardGuideLayout>
    </>
  );
};
export const VectorGuidelinesContent = () => {
  return (
    <>
      <section>
        {guidelinesdata3.map((guide, index) => (
          <div key={index}>
            <Typography variant="h3">{guide?.title}</Typography>

            <ul className="flex flex-col gap-5 mt-16">
              {guide?.description?.map((content, index) => (
                <li key={index}>
                  <h4 className="font-semibold text-sm">{content?.title}</h4>
                  {content.text.map((txt, index) => (
                    <>
                      <p key={index} className="text-[13px] px-5 py-2 leading-6">
                        {txt?.desc}
                      </p>
                    </>
                  ))}
                  {content?.cover?.map((covers, index) => (
                    <img src={covers?.image} key={index} alt={covers?.image} />
                  ))}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex justify-center items-center gap-5 flex-col mt-5 pt-8 border-t border-gray-300/25">
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
