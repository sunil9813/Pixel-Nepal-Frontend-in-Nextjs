import { Login } from "@/routes";
import Head from "next/head";
import React from "react";

const login = () => {
  return (
    <>
      <Head>
        <title>User Login - Pixel Nepal </title>
      </Head>
      <Login cover="/images/auth/l8.jpg" />
    </>
  );
};

export default login;
