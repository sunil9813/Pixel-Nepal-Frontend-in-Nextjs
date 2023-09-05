import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Button, IconButton, Input, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsCheckAll, BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RESET, register, sendVerificationEmail } from "@/redux/slices/authSlice";
import { toast } from "react-toastify";
import { Loader } from "@/components/common/Loader";
import { validateEmail } from "@/redux/services/authService";

const initialSate = {
  name: "",
  password: "",
  email: "",
  confirmPassword: "",
};

export const Register = ({ cover }) => {
  const navigate = useRouter();
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isLoggedIn } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState(initialSate);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  const { name, password, email, confirmPassword } = formData;

  const wrongIcon = <BsCheckAll size={18} />;
  const checkIcon = <BsCheckAll size={18} className="text-green-500" />;

  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    }
    return wrongIcon;
  };

  useEffect(() => {
    //check lowercase and uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUpperCase(true);
    } else {
      setUpperCase(false);
    }
    //check for number
    if (password.match(/([0-9])/)) {
      setNumber(true);
    } else {
      setNumber(false);
    }
    // Check for special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSpecialChar(true);
    } else {
      setSpecialChar(false);
    }
    // Check for PASSWORD LENGTH
    if (password.length > 8) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
  }, [password]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 8) {
      return toast.error("Password length should be 8 or more");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }
    if (!validateEmail(email)) {
      return toast.error("Email is not valid");
    }
    const userData = {
      name,
      email,
      password,
    };
    await dispatch(register(userData));
    await dispatch(sendVerificationEmail());
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate.push("/");
    }

    dispatch(RESET());
  }, [dispatch, isLoggedIn, isSuccess, navigate]);
  return (
    <>
      <section className="login h-[100vh]">
        <div className="flex justify-between">
          <div className="left w-2/3">
            <div className="h-[100vh] w-full">
              <img src={cover} alt="l1" className=" w-full h-full object-cover" />
            </div>
          </div>
          <div className="right w-1/3 px-16 py-2">
            <div className="text-center">
              <Link href="/">
                <Typography color="red" variant="h2">
                  SnapHub
                </Typography>
              </Link>
            </div>
            <h3 className="text-lg text-center mt-12 font-medium">Create an account</h3>
            {isLoading && <Loader />}
            <form className="flex flex-col gap-5 my-5" onSubmit={registerUser}>
              <Input name="name" value={name} onChange={handleInputChange} label="Username" color="red" size="lg" />
              <Input name="email" value={email} onChange={handleInputChange} label="Email" color="red" size="lg" />
              <PasswordInput placeholder="Password" required name="password" value={password} onChange={handleInputChange} />
              <PasswordInput
                placeholder="Confirm Password"
                required
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleInputChange}
                onPaste={(e) => {
                  e.preventDefault();
                  toast.error("Cannot paste into input field");
                  return false;
                }}
              />
              <button className="primary-btn rounded-lg">Register</button>
            </form>
            <ul className="box my-3 border border-indigo-300 p-3 rounded-lg">
              <li className={`text-[12px] ${upperCase ? "text-green-500" : "text-gray-500"} flex items-center gap-2`}>
                {switchIcon(upperCase)}
                Lowercase & Uppercase
              </li>
              <li className={`text-[12px] ${number ? "text-green-500" : "text-gray-500"} flex items-center gap-2`}>
                {switchIcon(number)}
                Number (0-9)
              </li>
              <li className={`text-[12px] ${specialChar ? "text-green-500" : "text-gray-500"} flex items-center gap-2`}>
                {switchIcon(specialChar)}
                Special Character (!@#$%^&*)
              </li>
              <li className={`text-[12px] ${passwordLength ? "text-green-500" : "text-gray-500"} flex items-center gap-2`}>
                {switchIcon(passwordLength)}
                At least 8 Character
              </li>
            </ul>
            <h3 className="text-sm text-center">
              Already have an account?
              <Link href="/auth/login" className="text-primary font-semibold">
                Log in
              </Link>
            </h3>
            <h3 className="text-lg text-center my-8 font-medium">OR</h3>
            {/*     <Button size="lg" variant="gradient" color="indigo"NEXT>
                Continue with Google
                <span className="absolute left-0 grid h-full w-12 place-items-center bg-indigo-600 transition-colors group-hover:bg-indigo-700">
                  <AiOutlineGoogle size={25} color="white" />
                </span>
              </Button> */}
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

            {/*    <div className="text-xl font-semibold flex justify-center items-center gap-2 mt-8">
              <span className="text-[#208E9F]">By</span>
              <div className="h-8">
                <img src="/images/apptec.png" alt="apptech" className="w-full h-full object-contain" />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export const PasswordInput = ({ fieldName, value, name, onChange, onPaste, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="input">
        <label className="block my-2 text-sm font-medium text-gray-900">{fieldName}</label>

        <div className="relative">
          <Input color="red" label={placeholder} type={showPassword ? "text" : "password"} value={value} name={name} onChange={onChange} onPaste={onPaste} icon={<div onClick={togglePassword}>{showPassword ? <AiFillEyeInvisible size={25} /> : <AiFillEye size={25} />}</div>} />
        </div>
      </div>
    </>
  );
};
