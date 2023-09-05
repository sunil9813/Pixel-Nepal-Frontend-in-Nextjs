import { validateEmail } from "@/redux/services/authService";
import { RESET, forgotPassword } from "@/redux/slices/authSlice";
import { Loader, LogoComponent } from "@/routes";
import { Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const Forgetpassword = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const [email, setEmail] = useState();

  const forgot = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Email field is required");
    }
    if (!validateEmail(email)) {
      return toast.error("Email is not valid");
    }

    const userData = {
      email,
    };

    await dispatch(forgotPassword(userData));
    await dispatch(RESET());
  };
  return (
    <>
      <section className="login h-[100vh]">
        <div className="flex justify-between items-center">
          <div className="left w-2/3">
            <div className="h-[100vh] w-full">
              <img src="/images/auth/l6.jpg" alt="l1" className=" w-full h-full object-cover" />
            </div>
          </div>
          <div className="right w-1/3 px-16 py-2">
            <div className="text-center">
              <LogoComponent />
            </div>
            {isLoading && <Loader />}
            <form onSubmit={forgot} className="flex flex-col gap-5 my-8 mt-16">
              <Input name="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" color="red" size="lg" />
              <button type="submit" className="primary-btn rounded-lg">
                Send Email
              </button>
            </form>

            <div className="text-xl font-semibold flex justify-center items-center gap-2 mt-16">
              <span className="text-[#208E9F]">By</span>
              <div className="h-8">
                <img src="/images/apptec.png" alt="apptech" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
