import { ResetPassword } from "@/routes";
import Head from "next/head";
import React from "react";

const resetpassword = () => {
  return (
    <>
      <Head>
        <title>Reset Password - Pixel Nepal </title>
      </Head>
      <ResetPassword cover="/images/auth/l7.jpg" />
    </>
  );
};

export default resetpassword;
