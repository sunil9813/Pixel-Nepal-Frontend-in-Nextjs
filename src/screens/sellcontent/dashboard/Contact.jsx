import { Button, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";
import React from "react";

export const Contact = () => {
  return (
    <>
      <section className="w-1/2 m-auto py-10">
        <Typography variant="h4" className="font-normal mb-8">
          Submit a request
        </Typography>

        <form className="flex flex-col gap-8">
          <Select size="lg" label="Select a category">
            <Option>Queries about Premium subscription/payments</Option>
            <Option>I am a contributor</Option>
            <Option>I can't log in</Option>
            <Option>How can I use/edit the images?</Option>
            <Option>I want to report a copyright infringement</Option>
            <Option>I have a suggestion</Option>
            <Option>I can't download files</Option>
            <Option>I have issues with my devices</Option>
            <Option>I want a subscription for several users</Option>
            <Option>I have a Teams plan but encounter issues</Option>
            <Option>Information about API</Option>
            <Option>I want to delete my account and data</Option>
            <Option>Other</Option>
          </Select>
          <Input size="lg" label="Others" />
          <div>
            <Input size="lg" label="Your Email" />
            <p className="text-[12px] my-3">Please, enter the email address where you wish to receive our answer. If you are a registered user of freepik, please include the email address you used when you registered if possible to help us locate your account as soon as possible.</p>
          </div>
          <div>
            <Textarea label="Write us a message" />
            <p className="text-[12px]">
              Please enter the details of your request and, if you have any questions regarding our Terms of Use, please include specific samples of the usage you wish to give our resouces. If you’re reporting a problem, make sure to include as much information as possible. Please include any screenshots or videos of issues since this will also help us resolve problems much sooner. Once your request is submitted, a member of our support staff will respond as soon as possible.
            </p>
            <br />
            <p className="text-[12px]">
              <span className="text-[12px] font-bold"> Basic information on Data Protection: </span> Freepik Company will process your data to respond to your questions, suggestions or complaints submitted, based on the consent given by clicking the "Send" button. Your data will not be disclosed to third parties and will be transferred outside the EU under the terms of the privacy policy. You can find out how to exercise your rights, revoke your consent and more information in the
              <span className="text-[12px] font-bold text-indigo-500">Privacy Policy</span>
            </p>
          </div>
          <div className="flex justify-end">
            <Button size="md" color="indigo">
              Submit
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};
