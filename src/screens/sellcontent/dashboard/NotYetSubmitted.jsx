import { Button, Checkbox, Tooltip, Typography } from "@material-tailwind/react";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

export const NotYetSubmitted = () => {
  return (
    <>
      <section className="p-4">
        <Typography variant="h4" className=" font-medium">
          Not yet submitted
        </Typography>
        <Typography variant="paragraph" className=" font-medium mt-5">
          This is your first upload!
        </Typography>
        <Typography variant="small" className=" font-medium mt-2 w-1/2">
          Upload and send your 10 best resources. Our team will review them to ensure they meet our requirements, so make sure they show your true potential.
        </Typography>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-5">
            <Checkbox
              label={
                <Typography variant="small" className="flex font-medium rounded-full">
                  All Files (0)
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography variant="small" className="flex font-medium rounded-full">
                  Ready to send (0)
                </Typography>
              }
            />
            <Checkbox
              label={
                <Typography variant="small" className="flex font-medium rounded-full">
                  With error (0)
                </Typography>
              }
            />
          </div>
          <div>
            <div className="flex items-center gap-5">
              <Button color="gray" size="md" variant="outlined" className="border-2 rounded-none">
                Upload CSV
              </Button>
              <Button color="indigo" size="md" variant="outlined" className="border-2 rounded-none flex items-center gap-3">
                <AiOutlineEdit size={15} />
                Edit Metadata
              </Button>
              <Button color="indigo" disabled size="md" className="rounded-none flex items-center gap-3">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 pt-6 justify-end">
          <span>0 files</span>
          <hr className="w-20 h-2 bg-blue-gray-300 rounded-xl" />
          <div className="flex gap-3">
            <span className="text-primary">Min 10</span>
            <Tooltip content="Resources required: 10 resources." placement="left">
              <button>
                <BiErrorCircle size={20} className="text-primary" />
              </button>
            </Tooltip>
          </div>
        </div>

        <FileUploadDesign />
      </section>
    </>
  );
};

export const FileUploadDesign = () => {
  return (
    <div class="flex items-center justify-center w-full mt-12">
      <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>
  );
};
