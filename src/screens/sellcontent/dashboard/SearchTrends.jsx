import { Typography, Card, Chip, Checkbox, Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";

export const SearchTrends = () => {
  return (
    <>
      <section className="SearchTrends">
        <div className="flex justify-between items-center">
          <div className=" mt-5">
            <Link href="/sellcontent/dashboard" className="text-primary flex items-center -ml-2">
              <BiChevronLeft size={25} />
              <span className="text-sm">Go to Dashboard</span>
            </Link>
            <Typography variant="h4" className=" font-medium mb-2">
              Search trends
            </Typography>
            <Typography variant="small">See what users are searching for and submit content that is always in demand.</Typography>
          </div>
          <div className="images flex justify-end">
            <img src="/images/contributor/dash-3.webp" alt="dash" className="flex justify-end" />
          </div>
        </div>
        <Typography variant="small" className="text-center my-6">
          The chart below includes the most-searched terms and formats, trendy keywords, and detailed content briefs.
        </Typography>
        <div className="py-12">
          <DefaultTable />
          <div className="images absolute top-2/3 left-0 -z-10">
            <img src="/images/contributor/dash-4.webp" alt="dash" className="w-full h-full object-contain" />
          </div>
          <div className="images absolute top-1/2 right-0 -z-10 rotate-180">
            <img src="/images/contributor/dash-4.webp" alt="dash" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>
    </>
  );
};

const TABLE_HEAD = ["TOPIC", "FORMAT", "KEYWORDS SUGGESTIONS", "COPY KEYWORDS", "BRIEF"];

const TABLE_ROWS = [
  {
    id: 1,
    TOPIC: "Brazilian food",
    FORMAT: "photo",
    KEYWORDS: [
      {
        keyword: "Brazilian food",
      },
      { keyword: "cuzcuz" },
      { keyword: "cous cous" },
      { keyword: "cassava" },
    ],
  },
  {
    id: 2,
    TOPIC: "Pixel pattern",
    FORMAT: "vector",
    KEYWORDS: [
      {
        keyword: "latam",
      },
      { keyword: "farm" },
      { keyword: "colombian" },
      { keyword: "couples" },
      { keyword: "family" },
    ],
  },
  {
    id: 3,
    TOPIC: "Colombian families",
    FORMAT: "photo",
    KEYWORDS: [{ keyword: "pixel pattern" }],
  },
  {
    id: 3,
    TOPIC: "Health silhouettes",
    FORMAT: "photo",
    KEYWORDS: [
      {
        keyword: "doctor silhouette",
      },
      { keyword: "nurse silhouette" },
    ],
  },
  {
    id: 4,
    TOPIC: "Female football fans",
    FORMAT: "photo",
    KEYWORDS: [
      {
        keyword: "doctor silhouette",
      },
      { keyword: "nurse silhouette" },
    ],
  },
  {
    id: 5,
    TOPIC: "Mexican embroidery",
    FORMAT: "vector",
    KEYWORDS: [
      {
        keyword: "doctor silhouette",
      },
      { keyword: "nurse silhouette" },
    ],
  },
  {
    id: 5,
    TOPIC: "Flower bouquet",
    FORMAT: "vector",
    KEYWORDS: [
      {
        keyword: "flower bouquet",
      },
      { keyword: "watercolor flowers" },
    ],
  },
  {
    id: 6,
    TOPIC: "Gender Reveal",
    FORMAT: "mockup, photo",
    KEYWORDS: [
      {
        keyword: "gender reveal",
      },
    ],
  },
  {
    id: 7,
    TOPIC: "Colombian nature",
    FORMAT: "photo",
    KEYWORDS: [
      {
        keyword: "sunset",
      },
      { keyword: "nature" },
      { keyword: "latam" },
      { keyword: "colombia" },
    ],
  },
];

export function DefaultTable() {
  return (
    <Card className="w-full h-full overflow-hidden">
      <table className="w-full table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none">
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ id, TOPIC, FORMAT, KEYWORDS }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "px-4 py-2" : "px-4 py-2 border-b border-blue-gray-50";

            return (
              <tr key={id}>
                <td className={`${classes} w-[12%]`}>
                  <Typography variant="small" color="blue-gray" className="font-normal capitalize">
                    {TOPIC}
                  </Typography>
                </td>
                <td className={`${classes} w-[10%]`}>
                  <Typography variant="small" color="blue-gray" className="font-normal capitalize">
                    {FORMAT}
                  </Typography>
                </td>
                <td className={`${classes} w-[50%]`}>
                  <div className="flex items-center flex-wrap gap-2">
                    {KEYWORDS.map((text, index) => (
                      <Chip
                        key={index}
                        value={text.keyword}
                        variant="outlined"
                        color="gray"
                        icon={
                          <Checkbox
                            ripple={false}
                            containerProps={{
                              className: "p-0",
                            }}
                            className="-ml-px border border-gray-400 before:hidden checked:border-primary checked:bg-primary"
                          />
                        }
                      />
                    ))}
                  </div>
                </td>

                <td className={`${classes} w-[14%]`}>
                  <FiCopy className="flex items-center justify-center w-full" />
                </td>
                <td className={`${classes} w-[14%]`}>
                  <Button variant="outlined" color="indigo">
                    View brief
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
