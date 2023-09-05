import { Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import React from "react";
import { FileUploadDesign } from "./NotYetSubmitted";

export const UnderRevision = () => {
  return (
    <>
      <section className="p-4">
        <Typography variant="h4" className=" font-medium">
          Under revision
        </Typography>
        <Typography variant="small" className=" font-medium my-6 w-1/2">
          Here you can see the submitted files. Our team will review them and check if they meet our requirements. The files could remain in this stage for a few days. Please be patient!
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
