import { Spinner } from "@material-tailwind/react";

export const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] z-40">
      <div className=" absolute top-[45%] left-1/2">
        <Spinner className="h-16 w-16" color="red" />
      </div>
    </div>
  );
};
