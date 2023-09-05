import { Footer } from "@/components/footer/Footer";
import { SellContentHeaderGuide } from "@/components/header/SellContentDashboard/SellContentHeaderGuide";
import { GuidelinesSidebar } from "@/routes";
import React from "react";

export const SellContentDashGuideLayout = ({ children }) => {
  return (
    <>
      <SellContentHeaderGuide />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export const SellContentDashboardGuideLayout = ({ children }) => {
  return (
    <>
      <section className="flex justify-between w-3/4 m-auto py-8">
        <div className="w-4/5 px-8">{children}</div>
        <div className="w-1/5">
          <GuidelinesSidebar />
        </div>
      </section>
    </>
  );
};
