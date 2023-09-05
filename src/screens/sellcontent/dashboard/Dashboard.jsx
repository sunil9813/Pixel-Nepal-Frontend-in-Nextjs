import { Card, Chip, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { AiOutlineBarChart, AiOutlineBook, AiOutlineCloudDownload, AiOutlineHeart, AiOutlineNotification, AiOutlineStar } from "react-icons/ai";
import { BsImages, BsUpload } from "react-icons/bs";
import { Button, Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import Link from "next/link";
import { BiSolidHot } from "react-icons/bi";

export const Dashboard = () => {
  return (
    <>
      <div className="flex gap-10 py-5">
        <div className="w-3/4">
          <DashboardContent />
          <Performanceoverview />
          <Mostdownloaded />
          <ContentSuggestions />
        </div>
        <div className="w-1/4">
          <DashboardSide />
        </div>
      </div>
    </>
  );
};

export const DashboardContent = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <section>
        <Card>
          <div className="flex p-8">
            <div className="w-2/3">
              <Typography variant="h5" className=" capitalize font-normal">
                We’ve been waiting for you!
              </Typography>
              <Typography variant="h6" className="capitalize font-normal text-sm my-3 text-red-200">
                WELCOME TO THE CONTRIBUTOR PANEL!
              </Typography>
              <Typography variant="paragraph">Now that you’re here, let’s make the most of our time together. You’re one step away from becoming a SnapHub contributor and converting your resources into earnings. This is what you have to do next:</Typography>

              <ul className="mt-5">
                <li className="flex items-center gap-5 mb-5">
                  <span className="text-primary">
                    <BsUpload size={20} />
                  </span>
                  <span> Upload and send your best resources. Quality is a must: let’s see how amazing you are.</span>
                </li>
                <li className="flex items-center gap-5 mb-5">
                  <span className="text-primary">
                    <AiOutlineStar size={20} />
                  </span>
                  <span>We believe in second chances, so you have two attempts to show your true potential.</span>
                </li>
                <li className="flex items-center gap-5 mb-5">
                  <span className="text-primary">
                    <AiOutlineBook size={20} />
                  </span>
                  <span> To make sure your resources are accepted, read first our Guidelines.</span>
                </li>
              </ul>
              <p>
                To see the onboarding again,
                <button onClick={handleOpen} className="text-primary" variant="text">
                  &nbsp; click here
                </button>
              </p>

              <Dialog open={open} handler={handleOpen}>
                <DialogHeader className="p-0">
                  <div className="w-full h-72">
                    <img src="/images/contributor/dash-2.webp" className="w-full h-full object-cover rounded-t-md" />
                  </div>
                </DialogHeader>
                <DialogBody className="bg-primary text-white rounded-b-md text-center py-5">
                  <Typography variant="h6">Welcome to the Contributor Panel</Typography>
                  <Typography variant="small" className="py-5">
                    Let us guide you through the different sections of the panel to help you to make your first upload easy and quick.
                  </Typography>
                  <Button color="white" size="lg">
                    Start onboarding
                  </Button>
                </DialogBody>
              </Dialog>
            </div>
            <div className="w-2/6">
              <img src="/images/contributor/dash-1.png" className="w-full h-full object-cover" />
            </div>
          </div>
        </Card>
      </section>
    </>
  );
};
export const DashboardSide = () => {
  return (
    <>
      <section className="border border-gray-200 p-3 rounded-md">
        <Typography className="font-normal" variant="h6">
          Festivities calendar
        </Typography>

        <Typography className="font-normal text-[12px]" variant="small">
          The new Festivities calendar is out. Get your dose of creativity with SnapHub
        </Typography>
      </section>
      <section className="py-8">
        <Typography className="font-normal mb-3" variant="h6">
          Latest trends
        </Typography>
        <div className="mb-5 rounded-md shadow-md p-2">
          <div className="h-40">
            <img src="https://mediablog.cdnpk.net/sites/7/2023/07/Cabecera_imagen.png" alt="card-image" className="h-full rounded-md w-full object-cover" />
          </div>
          <div className="mb-2 flex items-center justify-between">
            <p className=" text-sm mt-4">Harness AI to Create assets in Various Artistic Styles</p>
          </div>
          <Typography variant="small" color="gray" className="font-normal opacity-75">
            2023-07-12
          </Typography>
        </div>
        <div className="rounded-md shadow-md p-2">
          <div className="h-40">
            <img src="https://mediablog.cdnpk.net/sites/7/2023/07/cover-EN-9.png" alt="card-image" className="h-full rounded-md w-full object-cover" />
          </div>
          <div className="mb-2 flex items-center justify-between">
            <p className=" text-sm mt-4">Harness AI to Create assets in Various Artistic Styles</p>
          </div>
          <Typography variant="small" color="gray" className="font-normal opacity-75">
            2023-07-12
          </Typography>
        </div>
      </section>
    </>
  );
};
export const Performanceoverview = () => {
  return (
    <>
      <section className="my-8">
        <Typography variant="h5" className=" font-normal mb-5">
          Performance overview
        </Typography>
        <div className="grid grid-cols-4 gap-5">
          <PerformanceoverviewCard color="text-green-500" title="Estimated earnings" currentincome="$ 100" last="Last Month" pastincome="$ 100" icon={<AiOutlineBarChart size={25} />} />
          <PerformanceoverviewCard color="text-indigo-500" title="Downloads" currentincome="100" last="Last Month" pastincome="100" icon={<AiOutlineCloudDownload size={25} />} />
          <PerformanceoverviewCard color="text-red-500" title="Likes" currentincome="10" last="Last Month" pastincome="20" icon={<AiOutlineHeart size={25} />} />
          <PerformanceoverviewCard color="text-red-500" title="Files" currentincome="10" last="Last Month" pastincome="20" icon={<BsImages size={25} />} />
        </div>
        <p className="text-[12px] py-3 flex items-center gap-2">
          <label>
            <AiOutlineNotification size={15} />
          </label>
          Estimated earnings: This amount is an estimate based on your earnings from last month. Actual earnings will be displayed at the end of the month.
        </p>
      </section>
    </>
  );
};
export const PerformanceoverviewCard = (props) => {
  return (
    <>
      <Card variant="h5" className="p-3 shadow-none border border-gray-200 flex flex-col gap-2">
        <Typography variant="small" color="black" className="font-normal">
          {props.title}
        </Typography>
        <Typography variant="h5" color="black" className="font-normal">
          {props.currentincome}
        </Typography>
        <div className="flex justify-between items-center">
          <div>
            <Typography variant="small" className="font-normal text-[12px]">
              {props.last}
            </Typography>
            <Typography variant="h6" color="black" className=" font-normal">
              {props.pastincome}
            </Typography>
          </div>
          <div className={`${props.color}`}>{props.icon}</div>
        </div>
      </Card>
    </>
  );
};

export const Mostdownloaded = () => {
  return (
    <>
      <section className="border border-gray-200 p-3 rounded-md">
        <div className="flex items-center justify-between">
          <Typography variant="h5" className=" font-normal mb-5">
            Most downloaded in last month
          </Typography>
          <Link href="/" className="font-normal text-primary text-sm">
            View All
          </Link>
        </div>

        <div class="relative overflow-x-auto sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" class="px-6 py-5">
                  Author
                </th>
                <th scope="col" class="px-6 py-5">
                  Preview
                </th>
                <th scope="col" class="px-6 py-5">
                  Downloads
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                  <img src="https://profile.freepik.com/accounts/avatar/default_07.png" alt="Apple Watch" className="w-12 h-12 rounded-full object-cover" />
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  <img src="https://img.freepik.com/free-photo/yellow-flowers-watercolor-seamless-patterns_491225-49.jpg?size=260&ext=jpg" alt="Apple Watch" className="w-32 h-32 rounded-xl object-cover" />
                </td>
                <td class="px-6 py-4">
                  <span>500</span>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                  <img src="https://profile.freepik.com/accounts/avatar/default_08.png" alt="Apple Watch" className="w-12 h-12 rounded-full object-cover" />
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  <img src="https://img.freepik.com/free-photo/barbie-shopaholic-summer-trendy-outfit_802234-2794.jpg?size=260&ext=jpg" alt="Apple Watch" className="w-32 h-32 rounded-xl object-cover" />
                </td>
                <td class="px-6 py-4">
                  <span>500</span>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                  <img src="https://profile.freepik.com/accounts/avatar/default_10.png" alt="Apple Watch" className="w-12 h-12 rounded-full object-cover" />
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  <img src="https://img.freepik.com/free-photo/cute-disco-plastic-doll-portrait_688547-16719.jpg?size=260&ext=jpg" alt="Apple Watch" className="w-32 h-32 rounded-xl object-cover" />
                </td>
                <td class="px-6 py-4">
                  <span>500</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export const ContentSuggestions = () => {
  return (
    <>
      <section className="border border-gray-200 p-3 mt-8 rounded-md">
        <Typography variant="h5" className=" font-normal">
          Most downloaded in last month
        </Typography>
        <Typography variant="small" className="font-normal mb-5">
          Check out our content suggestions and get inspiration on what to upload next.
        </Typography>

        <Button variant="outlined" color="indigo" className="flex items-center gap-3">
          Search trends
          <BiSolidHot size={20} />
        </Button>

        <div className="flex flex-wrap gap-3 mt-5">
          <Chip variant="outlined" color="gray" size="lg" value="Labor day" className="rounded-none font-normal" />
          <Chip variant="outlined" color="gray" size="lg" value="7 de setembro" className="rounded-none font-normal" />
          <Chip variant="outlined" color="gray" size="lg" value="Janmashtami" className="rounded-none font-normal" />
          <Chip variant="outlined" color="gray" size="lg" value="9 11" className="rounded-none font-normal" />
          <Chip variant="outlined" color="gray" size="lg" value="Rosh Hashanah" className="rounded-none font-normal" />
          <Chip variant="outlined" color="gray" size="lg" value="Oktoberfest" className="rounded-none font-normal" />
          <Chip variant="outlined" color="gray" size="lg" value="Independencia de México" className="rounded-none font-normal" />
          <Chip variant="outlined" color="gray" size="lg" value="World ozone day" className="rounded-none font-normal" />
          <Chip variant="outlined" color="gray" size="lg" value="Autumn" className="rounded-none font-normal" />
          <Chip variant="outlined" color="gray" size="lg" value="Mawlid" className="rounded-none font-normal" />
          <Chip variant="outlined" color="gray" size="lg" value="World tourism day" className="rounded-none font-normal" />
          <Chip variant="outlined" color="gray" size="lg" value="Chuseok" className="rounded-none font-normal" />
          <Chip variant="outlined" color="gray" size="lg" value="Fiestas Patrias Chile" className="rounded-none font-normal" />
          <Chip variant="outlined" color="gray" size="lg" value="World heart day" className="rounded-none font-normal" />
          <Chip variant="outlined" color="gray" size="lg" value="Mid autumn festival" className="rounded-none font-normal" />
        </div>
      </section>
    </>
  );
};
