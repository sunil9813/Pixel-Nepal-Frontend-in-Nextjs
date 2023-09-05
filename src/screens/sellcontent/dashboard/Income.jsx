import { Typography, Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import React, { useState } from "react";

export const Income = () => {
  const [activeTab, setActiveTab] = useState("month");
  const data = [
    {
      label: "month to date",
      value: "month",
      income: "150",
      download: "20",
    },
    {
      label: "last month",
      value: "last",
      income: "50",
      download: "5",
    },
    {
      label: "years to date",
      value: "years",
      income: "550",
      download: "200",
    },
  ];
  return (
    <>
      <section className="p-4">
        <Typography variant="h4" className=" font-medium">
          Performance
        </Typography>
        <Typography variant="small" className=" font-medium my-6 w-1/2">
          Earnings for this month are an estimate based on data from previous months. Actual earnings will be displayed at the end of the month.{" "}
        </Typography>

        <Tabs value={activeTab} className="border border-gray-200 p-5 rounded-lg capitalize">
          <TabsHeader
            className="w-1/2"
            indicatorProps={{
              className: "shadow-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} onClick={() => setActiveTab(value)} className={`p-2 ${activeTab === value ? "text-red-500" : ""}`}>
                <span>{label}</span>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {data.map(({ value, income, download }) => (
              <TabPanel key={value} value={value} className="m-0 mt-2 grid grid-cols-2 gap-8">
                <div className="p-5 border border-gray-200">
                  <h2 className="text-black text-md pb-6">ESTIMATED EARNINGS</h2>
                  <Typography variant="h4" className="font-normal text-primary">
                    $ {income}
                  </Typography>
                </div>
                <div className="p-5 border border-gray-200">
                  <h2 className="text-black text-md pb-6">ESTIMATED DOWNLOADS</h2>
                  <Typography variant="h4" className="font-normal text-primary">
                    {download}
                  </Typography>
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </section>
    </>
  );
};
