import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

export const LogoComponent = () => {
  return (
    <>
      <Link href="/">
        <Typography variant="h2">
          Pixel <span className="text-primary">Nepal</span>
        </Typography>
      </Link>
    </>
  );
};
