import { SellContentBlog, SellContentLayout } from "@/routes";
import React from "react";

const blog = () => {
  return (
    <>
      <SellContentLayout>
        <SellContentBlog />
      </SellContentLayout>
    </>
  );
};

export default blog;
