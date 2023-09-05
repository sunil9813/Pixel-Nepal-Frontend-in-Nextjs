import React from "react";
import { Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import { FileUploadDesign } from "./NotYetSubmitted";

export const RejectedFiles = () => {
  return (
    <>
      <section className="p-4">
        <Typography variant="h4" className=" font-medium">
          Rejected files
        </Typography>
        <Typography variant="small" className=" font-medium my-6 w-1/2">
          Rejected files will be displayed here for a <span className="text-primary font-semibold">period of 30 days</span> from the time of rejection. Read more about rejection reasons for each file type here:
        </Typography>

        <Menu placement="bottom-start">
          <MenuHandler>
            <Button variant="outlined" color="indigo">
              All (0)
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>All (0)</MenuItem>
            <MenuItem>Photo (0)</MenuItem>
            <MenuItem>Video (0)</MenuItem>
            <MenuItem>PSD (0)</MenuItem>
          </MenuList>
        </Menu>

        <FileUploadDesign />
      </section>
    </>
  );
};
