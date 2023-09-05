import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

export const GuidelinesSidebar = () => {
  return (
    <>
      <section>
        <Typography variant="h6" className="font-medium mb-5">
          Related Articles
        </Typography>
        <ul className="flex gap-3 flex-col">
          <li>
            <Link href="/" className="text-indigo-500 text-sm">
              Metadata PSD
            </Link>
          </li>
          <li>
            <Link href="/" className="text-indigo-500 text-sm">
              Photo guidelines
            </Link>
          </li>
          <li>
            <Link href="/" className="text-indigo-500 text-sm">
              PSD guidelines
            </Link>
          </li>
          <li>
            <Link href="/" className="text-indigo-500 text-sm">
              Metadata Guides
            </Link>
          </li>
          <li>
            <Link href="/" className="text-indigo-500 text-sm">
              Automatic rejections
            </Link>
          </li>
        </ul>

        <Typography variant="h6" className="font-medium mt-10 mb-5">
          Trending Articles
        </Typography>
        <ul className="flex gap-2 flex-col">
          <li>
            <Link href="/" className="text-indigo-500 text-sm">
              Attribution: How, when and where?
            </Link>
          </li>
          <li>
            <Link href="/" className="text-indigo-500 text-sm">
              Is SnapHub for free?
            </Link>
          </li>
          <li>
            <Link href="/" className="text-indigo-500 text-sm">
              Download limit: How many resources can I download?
            </Link>
          </li>
          <li>
            <Link href="/" className="text-indigo-500 text-sm">
              Individual images and custom works
            </Link>
          </li>
          <li>
            <Link href="/" className="text-indigo-500 text-sm">
              Products to be sold to multiple clients. PoD orders
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};
