import { Loader } from "@/components/common/Loader";
import { validateEmail } from "@/redux/services/authService";
import { RESET, login, sendLoginCode } from "@/redux/slices/authSlice";
import { LogoComponent } from "@/routes";
import { IconButton, Input } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

const initialSate = {
  password: "",
  email: "",
};

export const Login = ({ cover }) => {
  const navigate = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialSate);

  const { isLoading, isSuccess, isError, isLoggedIn, twoFactor } = useSelector((state) => state.auth);
  const { password, email } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("All fields are required");
    }
    if (!validateEmail(email)) {
      return toast.error("Email is not valid");
    }
    const userData = {
      email,
      password,
    };
    await dispatch(login(userData));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate.push("/");
    }
    // login with otp
    if (isError && twoFactor) {
      dispatch(sendLoginCode(email));
      navigate.push(`/auth/otp/${email}`);
    }
    dispatch(RESET());
  }, [dispatch, isLoggedIn, isSuccess, navigate, isError, twoFactor]);

  return (
    <>
      <section className="login h-[100vh]">
        <div className="flex justify-between">
          <div className="left w-2/3">
            <div className="h-[100vh] w-full">
              <img src={cover} alt="cover" className=" w-full h-full object-cover" />
            </div>
          </div>
          <div className="right w-1/3 px-16 py-10">
            <div className="text-center">
              <LogoComponent />
            </div>
            <h3 className="text-lg text-center mt-12 font-medium">Login</h3>
            {isLoading && <Loader />}
            <form className="flex flex-col gap-5 my-5" onSubmit={loginUser}>
              <Input name="email" value={email} onChange={handleInputChange} label="Email" color="red" size="lg" />
              <Input name="password" value={password} onChange={handleInputChange} label="Password" color="red" size="lg" />
              <button type="submit" className="primary-btn rounded-lg">
                Login
              </button>
            </form>

            <h3 className="text-sm text-center">
              Don’t you have an account?
              <Link href="/auth/register" className="text-primary font-semibold">
                Sign up
              </Link>
            </h3>
            <h3 className="text-sm text-center">
              <Link href="/auth/forgetpassword" className="text-primary font-semibold">
                Forget Password
              </Link>
            </h3>
            <h3 className="text-lg text-center my-8 font-medium">OR</h3>

            <div className="flex items-center justify-center gap-4">
              <IconButton size="lg" variant="outlined" color="blue-gray">
                <FcGoogle size={25} color="white" />
              </IconButton>
              <IconButton size="lg" variant="outlined" color="blue">
                <BsFacebook size={25} color="blue" />
              </IconButton>
              <IconButton size="lg" variant="outlined" color="red">
                <HiOutlineMail size={25} color="red" />
              </IconButton>
            </div>

            <div className="text-xl font-semibold flex justify-center items-center gap-2 mt-8">
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
