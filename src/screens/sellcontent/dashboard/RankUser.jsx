import { Card, Tooltip, Typography } from "@material-tailwind/react";
import React from "react";
import { AiOutlineAppstoreAdd, AiOutlineCloudDownload } from "react-icons/ai";
import { PiUsersThree } from "react-icons/pi";

export const RankUser = () => {
  return (
    <>
      <section className="p-4 grid grid-cols-4 gap-5">
        <CurrentLoginUserRankCard />
        <RankUserCard image="https://avatar.freepik.com/2199844-210728105124.jpg" />
        <RankUserCard image="https://profile.freepik.com/accounts/avatar/737579.jpg" />
        <RankUserCard image="https://www.freepik.com/profile/accounts/avatar/default_10.png" />
        <RankUserCard image="https://avatar.cdnpk.net/1684710.jpg" />
        <RankUserCard image="https://avatar.freepik.com/13115374-220407115921.jpg" />
        <RankUserCard image="https://avatar.cdnpk.net/default_06.png" />
        <RankUserCard image="https://avatar.cdnpk.net/14787228-220806032820.jpg" />
        <RankUserCard image="https://profile.freepik.com/accounts/avatar/858392.jpg" />
        <RankUserCard image="https://avatar.freepik.com/12966487.jpg" />
        <RankUserCard image="https://avatar.freepik.com/2199844-210728105124.jpg" />
        <RankUserCard image="https://profile.freepik.com/accounts/avatar/737579.jpg" />
        <RankUserCard image="https://www.freepik.com/profile/accounts/avatar/default_10.png" />
        <RankUserCard image="https://avatar.cdnpk.net/1684710.jpg" />
        <RankUserCard image="https://avatar.freepik.com/13115374-220407115921.jpg" />
        <RankUserCard image="https://avatar.cdnpk.net/1684710.jpg" />
        <RankUserCard image="https://avatar.freepik.com/2199844-210728105124.jpg" />
        <RankUserCard image="https://profile.freepik.com/accounts/avatar/737579.jpg" />
        <RankUserCard image="https://www.freepik.com/profile/accounts/avatar/default_10.png" />
        <RankUserCard image="https://avatar.cdnpk.net/1684710.jpg" />
        <RankUserCard image="https://avatar.freepik.com/13115374-220407115921.jpg" />
        <RankUserCard image="https://avatar.cdnpk.net/default_06.png" />
        <RankUserCard image="https://avatar.cdnpk.net/14787228-220806032820.jpg" />
        <RankUserCard image="https://profile.freepik.com/accounts/avatar/858392.jpg" />
        <RankUserCard image="https://avatar.freepik.com/12966487.jpg" />
        <RankUserCard image="https://avatar.freepik.com/2199844-210728105124.jpg" />
        <RankUserCard image="https://profile.freepik.com/accounts/avatar/737579.jpg" />
        <RankUserCard image="https://www.freepik.com/profile/accounts/avatar/default_10.png" />
        <RankUserCard image="https://avatar.cdnpk.net/1684710.jpg" />
      </section>
    </>
  );
};
export const CurrentLoginUserRankCard = () => {
  return (
    <>
      <div className="p-3 py-6 shadow-sm border border-primary">
        <div className="flex items-center justify-between">
          <div className="">
            <img src="https://avatar.cdnpk.net/default_07.png" alt="avatar" className="w-16 h-16 rounded-full" />
          </div>
          <div>
            <Typography className="text-right text-primary font-medium"># 1</Typography>
            <Typography>rawpixel.com</Typography>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 px-5">
          <div className="flex items-center flex-col gap-2">
            <Tooltip content="Files">
              <button>
                <AiOutlineAppstoreAdd size={20} />
              </button>
            </Tooltip>
            <span>0</span>
          </div>
          <div className="flex items-center flex-col gap-2">
            <Tooltip content="Download">
              <button>
                <AiOutlineCloudDownload size={20} />
              </button>
            </Tooltip>
            <span>0</span>
          </div>
          <div className="flex items-center flex-col gap-2">
            <Tooltip content="Followers">
              <button>
                <PiUsersThree size={20} />
              </button>
            </Tooltip>
            <span>0</span>
          </div>
        </div>
      </div>
    </>
  );
};
export const RankUserCard = (props) => {
  return (
    <>
      <div className="p-3 py-6 shadow-shadow1 rounded-md">
        <div className="flex items-center justify-between">
          {props.image ? (
            <div className="">
              <img src={props.image} alt="avatar" className="w-16 h-16 rounded-full" />
            </div>
          ) : (
            <div className="">
              <img src="https://avatar.cdnpk.net/default_07.png" alt="avatar" className="w-16 h-16 rounded-full" />
            </div>
          )}

          <div>
            <Typography className="text-right text-primary font-medium"># 1</Typography>
            <Typography>rawpixel.com</Typography>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 px-5">
          <div className="flex items-center flex-col gap-2">
            <Tooltip content="Files">
              <button>
                <AiOutlineAppstoreAdd size={20} />
              </button>
            </Tooltip>
            <span>0</span>
          </div>
          <div className="flex items-center flex-col gap-2">
            <Tooltip content="Download">
              <button>
                <AiOutlineCloudDownload size={20} />
              </button>
            </Tooltip>
            <span>0</span>
          </div>
          <div className="flex items-center flex-col gap-2">
            <Tooltip content="Followers">
              <button>
                <PiUsersThree size={20} />
              </button>
            </Tooltip>
            <span>0</span>
          </div>
        </div>
      </div>
    </>
  );
};
