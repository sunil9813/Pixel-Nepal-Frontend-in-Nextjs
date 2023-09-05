import React, { useState } from "react";
import { Avatar, Button, Input, Radio, Textarea, Typography } from "@material-tailwind/react";
import { AiOutlineCheckCircle, AiOutlineCloudUpload, AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import dynamic from "next/dynamic";

const MasonryLayout = dynamic(() => import("react-layout-masonry"), {
  ssr: false,
});

export const ProfileComponents = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const tabs = [
    { name: "About", component: <AboutComponent /> },
    { name: "Eidt Profile", component: <EidtProfileComponent /> },
    { name: "Posts Gallary", component: <PostsGallaryComponent /> },
    { name: "Friends", component: <FriendsComponent /> },
    { name: "Update Password", component: <UpdatePasswordComponent /> },
    { name: "Account Setting", component: <AccountSettingComponent /> },
  ];
  return (
    <>
      <div>
        <div className="cover-img h-[330px] relative">
          <div>
            <img src="https://source.unsplash.com/500x500/?wallpaper,background" className="w-full h-[330px] object-cover rounded-xl" alt="cover" />
          </div>
          <div className="absolute -bottom-14 left-5">
            <Avatar src="https://react.spruko.com/vue/spruha/preview/assets/1-81ab441a.jpg" alt="avatar" size="xxl" withBorder={true} color="white" className="p-1" />
          </div>
          <div className="absolute bottom-5 right-5">
            <div className="flex gap-5 items-center">
              <Button color="green" className="flex items-center gap-3 rounded-full font-normal">
                <AiOutlinePlus size={18} />
                Follow
              </Button>
              <Button color="purple" className="flex items-center gap-3 rounded-full font-normal">
                <AiOutlineCloudUpload size={18} />
                Cover
              </Button>
            </div>
          </div>
        </div>
        <div className="details pt-16">
          <div className="flex justify-between items-center">
            <div>
              <Typography variant="h5" color="black" className="font-normal ml-5">
                Sonia Taylor
              </Typography>
            </div>
            <div className="flex justify-between gap-8 items-center -mt-8">
              <div className="flex justify-center flex-col items-center">
                <Typography variant="h4" color="indigo">
                  26
                </Typography>
                <Typography variant="small" color="black">
                  PROJECTS
                </Typography>
              </div>
              <div className="flex justify-center flex-col items-center">
                <Typography variant="h4" color="indigo">
                  33
                </Typography>
                <Typography variant="small" color="black">
                  FOLLOWERS
                </Typography>
              </div>
              <div className="flex justify-center flex-col items-center">
                <Typography variant="h4" color="indigo">
                  136
                </Typography>
                <Typography variant="small" color="black">
                  FOLLOWING
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-indigo-50 mt-8 flex items-center gap-5 p-4 rounded-md">
          {tabs.map((tab, index) => (
            <button key={index} className={`tab-button text-sm ${activeTab === index ? "text-indigo-500" : "text-black"}`} onClick={() => handleTabClick(index)}>
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      <br />
      <div>
        <div className="tab-content"> {tabs[activeTab].component}</div>
      </div>
    </>
  );
};
export const AboutComponent = () => {
  return (
    <>
      <div className="flex flex-col gap-7 border border-gray-200 rounded-lg">
        <div className="p-4">
          <h2 className="text-black font-semibold mb-5">Basic Info</h2>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 bg-orange-50 rounded-full text-orange-500 flex justify-center items-center">
                <AiOutlineUser size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-gray-500">Full Name</span>
                <span className="text-sm text-black">Sunil BK</span>
              </div>
            </div>
            <div className="w-10 h-10 bg-purple-50 rounded-full text-purple-500 flex justify-center items-center">
              <BsArrowRight size={20} />
            </div>
            <div className="flex items-center flex-row-reverse gap-5">
              <div className="w-10 h-10 bg-red-50 rounded-full text-red-500 flex justify-center items-center">
                <AiOutlineCheckCircle size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-gray-500">Is Verified</span>
                <span className="text-sm text-black"> Yes</span>
              </div>
            </div>
            <div className="w-10 h-10 bg-purple-50 rounded-full text-purple-500 flex justify-center items-center">
              <BsArrowRight size={20} />
            </div>
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 bg-green-50 rounded-full text-green-500 flex justify-center items-center">
                <AiOutlineCheckCircle size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-gray-500">Is Admin</span>
                <span className="text-sm text-black"> Yes</span>
              </div>
            </div>
            <div className="w-10 h-10 bg-purple-50 rounded-full text-purple-500 flex justify-center items-center">
              <BsArrowRight size={20} />
            </div>
            <div className="flex items-center flex-row-reverse gap-5">
              <div className="w-10 h-10 bg-red-50 rounded-full text-red-500 flex justify-center items-center">
                <AiOutlineCheckCircle size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-gray-500">Is Blocked</span>
                <span className="text-sm text-black"> No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-b border-gray-200 pb-5">
          <h2 className="text-black font-semibold mb-5">CONTACT</h2>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 bg-purple-50 rounded-full text-purple-500 flex justify-center items-center">
                <BiPhoneCall size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-gray-500"> Mobile</span>
                <span className="text-sm text-black"> +245 354 654</span>
              </div>
            </div>
            <div className="w-10 h-10 bg-green-50 rounded-full text-green-500 flex justify-center items-center">
              <BsArrowRight size={20} />
            </div>
            <div className="flex items-center flex-row-reverse gap-5">
              <div className="w-10 h-10 bg-red-50 rounded-full text-red-500 flex justify-center items-center">
                <MdOutlineMarkEmailUnread size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-gray-500">Email</span>
                <span className="text-sm text-black"> example@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 pb-4">
          <h2 className="text-black font-semibold">BIODATA</h2>
          <p className="text-sm text-gray-500 mt-3">
            Hi I'm Petey Cruiser,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
            pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          </p>
        </div>
      </div>
    </>
  );
};
export const EidtProfileComponent = () => {
  return (
    <>
      <div className="p-4 border border-gray-200 rounded-lg">
        <form className="flex flex-col gap-5">
          <Input label="Email" disabled color="indigo" />
          <Input label="Username" color="indigo" />
          <Input label="Phone" color="indigo" />
          <Textarea label="Bio" color="indigo" />
          <Button color="indigo">Update Profile</Button>
        </form>
      </div>
    </>
  );
};
export const PostsGallaryComponent = () => {
  const dummyData = [];

  for (let id = 1; id <= 50; id++) {
    const title = `Image ${id}`;
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    // Generate random width and height values between 300 and 800
    const width = Math.floor(Math.random() * 500) + 300;
    const height = Math.floor(Math.random() * 500) + 300;

    const cover = `https://source.unsplash.com/${width}x${height}/?nature,landscape&${id}`;

    dummyData.push({
      id,
      title,
      description,
      cover,
    });
  }

  return (
    <>
      <div className="p-4 post-list border border-gray-200 rounded-lg">
        <MasonryLayout columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }} gap={16}>
          {dummyData.map((item) => (
            <div className="card">
              <div className="img">
                <img src={item.cover} alt={item.title} className="w-full h-full object-cover rounded-lg" />
              </div>
              <h3 className="py-3">{item.description}</h3>
            </div>
          ))}
        </MasonryLayout>
      </div>
    </>
  );
};
export const FriendsComponent = () => {
  const dummyData = [];

  for (let id = 1; id <= 50; id++) {
    const name = `Name ${id}`;
    const position = `Web Designer ${id}`;
    const description = "Lorem ipsum dolor sit amet.";

    // Generate random width and height values between 300 and 800
    const width = Math.floor(Math.random() * 500) + 300;
    const height = Math.floor(Math.random() * 500) + 300;

    const cover = `https://source.unsplash.com/${width}x${height}/?portrait,people&${id}`;

    dummyData.push({
      id,
      name,
      position,
      description,
      cover,
    });
  }
  return (
    <>
      <div className="p-4 post-list grid grid-cols-4 gap-5">
        {dummyData.map((item) => (
          <div className="card p-5 py-8 border border-gray-200 rounded-lg flex text-center items-center justify-center flex-col">
            <div className="img w-16 h-16">
              <img src={item.cover} alt={item.name} className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className=" mt-3 text-black font-semibold">{item.name}</h3>
            <span className="text-sm">{item.position}</span>
            <p className="text-[12px]">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export const UpdatePasswordComponent = () => {
  return (
    <>
      <div className="p-4 border border-gray-200 rounded-lg">
        <form className="flex flex-col gap-5">
          <Input label="Password" color="indigo" />
          <Input label="Confirm Passoword" color="indigo" />
          <Button color="indigo" className="w-auto">
            Update Passowrd
          </Button>
        </form>
      </div>
    </>
  );
};
export const AccountSettingComponent = () => {
  return (
    <>
      <div className="p-4 border border-gray-200 rounded-lg">
        <div className="">
          <h2 className="text-black font-semibold mb-5">ACCOUNT</h2>
          <div className="flex justify-between items-center">
            <div className="w-1/4 text-sm">User Name</div>
            <div className="w-3/4">
              <Input value="Sunil BK" color="indigo" />
            </div>
          </div>
          <div className="flex justify-between items-center my-5">
            <div className="w-1/4 text-sm">Email</div>
            <div className="w-3/4">
              <Input value="example@gmail.com" color="indigo" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-1/4 text-sm">Language</div>
            <div className="w-3/4">
              <Input value="English" color="indigo" />
            </div>
          </div>
          <div className="flex items-center my-5">
            <div className="w-1/4 text-sm">Verification</div>
            <div className="w-3/4">
              <Radio name="type" color="indigo" defaultChecked />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
