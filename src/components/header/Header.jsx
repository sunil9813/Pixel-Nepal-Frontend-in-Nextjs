import { Typography, Menu, MenuHandler, MenuList, Avatar, MenuItem } from "@material-tailwind/react";
import Link from "next/link";
import { BiHelpCircle, BiUserCircle } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlinePoweroff, AiOutlineSetting } from "react-icons/ai";

export const Header = () => {
  return (
    <>
      <header className="px-8 m-0 py-2 w-full shadow-none bg-cyan-500  rounded-none border-none">
        <div className="flex items-center justify-between text-white">
          <div className="logo flex">
            <LogoImg />
          </div>
          <div className="link text-sm flex gap-5 items-center">
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register" className="border border-white px-6 py-1.5 rounded-sm">
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export const UserProfileAfterLogin = ({ logoutUser, photo, username }) => {
  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <Avatar src={photo} size="sm" variant="circular" alt={username} className="cursor-pointer" />
      </MenuHandler>
      <MenuList>
        <Link href="/sellcontent/dashboard" className="outline-none">
          <MenuItem className="flex items-center gap-2">
            <AiOutlineDashboard size={18} />
            <Typography variant="small" className="font-normal">
              Dashboard
            </Typography>
          </MenuItem>
        </Link>
        <Link href="/user/profile" className=" outline-none border-none">
          <MenuItem className="flex items-center gap-2">
            <BiUserCircle size={18} />
            <Typography variant="small" className="font-normal">
              My Profile
            </Typography>
          </MenuItem>
        </Link>
        <MenuItem className="flex items-center gap-2">
          <AiOutlineSetting size={18} />
          <Typography variant="small" className="font-normal">
            Edit Profile
          </Typography>
        </MenuItem>

        <MenuItem className="flex items-center gap-2">
          <BiHelpCircle size={18} />
          <Typography variant="small" className="font-normal">
            Help
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 " onClick={logoutUser}>
          <AiOutlinePoweroff size={18} />
          <Typography variant="small" className="font-normal">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export const LogoImg = () => {
  return (
    <Link href="/" variant="h5" className="mr-4 font-normal cursor-pointer py-1.5 capitalize">
      <img src="/images/background/logo.png" className="w-14 h-14" />
    </Link>
  );
};
