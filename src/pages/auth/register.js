import { Register } from "@/routes";
import Head from "next/head";
import React from "react";

const register = () => {
  return (
    <>
      <Head>
        <title>User Registration - Pixel Nepal </title>
      </Head>
      <Register cover="/images/auth/l7.jpg" />
    </>
  );
};

export default register;
