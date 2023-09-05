import { SellContentDashboardHeader } from "@/components/header/SellContentDashboard/SellContentDashboardHeader";
import { SellContentSidebar } from "@/routes";
import React from "react";

export const SellContentDashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex relative">
        <div className="sticky top-0 left-0 h-[100vh] w-1/5">
          <SellContentSidebar />
        </div>
        <main className="w-4/5">
          <SellContentDashboardHeader />
          <div className="px-8 py-5">{children}</div>
        </main>
      </div>
    </>
  );
};
