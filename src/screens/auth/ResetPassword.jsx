import { RESET, resetPassword } from "@/redux/slices/authSlice";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PasswordInput } from "./Register";
import { Loader, LogoComponent } from "@/routes";

const initialState = {
  password: "",
  confirmPassword: "",
};

export const ResetPassword = ({ cover }) => {
  const [formData, setFormData] = useState(initialState);
  const { password, confirmPassword } = formData;
  const navigate = useRouter();
  const { resetToken } = navigate.query;
  const dispatch = useDispatch();

  const { isLoading, isSuccess, message } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = async (e) => {
    e.preventDefault();
    if (!confirmPassword || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 8) {
      return toast.error("Password length should be 8 or more");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      password,
    };

    await dispatch(resetPassword({ userData, resetToken }));
    await dispatch(RESET());
  };

  useEffect(() => {
    if (isSuccess && message.includes("Password Reset Successful")) {
      navigate.push("/auth/login");
    }
  }, [dispatch, navigate, message, isSuccess]);
  return (
    <>
      <div className="login h-[100vh]">
        <div className="flex justify-between">
          <div className="left w-2/3">
            <div className="h-[100vh] w-full">
              <img src={cover} alt="cover" className=" w-full h-full object-cover" />
            </div>
          </div>
          <div className="right w-1/3 px-16 py-10">
            <div className="w-full h-full flex justify-center items-center flex-col">
              <div className="text-center">
                <LogoComponent />
              </div>
              <h3 className="text-lg text-center mt-12 font-medium">Reset Password</h3>
              {isLoading && <Loader />}
              <form onSubmit={reset} className="flex flex-col gap-5 my-5 w-full">
                <PasswordInput placeholder="Password" required name="password" value={password} onChange={handleInputChange} />{" "}
                <PasswordInput
                  placeholder="Confirm Password"
                  required
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleInputChange}
                  //onPaste={(e) => {
                  //  e.preventDefault()
                  //  toast.error("Cannot paste into input field")
                  //  return false
                  //}}
                />
                <button type="submit" className="primary-btn rounded-lg">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
