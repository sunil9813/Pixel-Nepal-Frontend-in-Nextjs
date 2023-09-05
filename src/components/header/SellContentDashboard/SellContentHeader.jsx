import React from "react";
import { LogoText } from "../SearchHeader";
import Link from "next/link";
import { AiOutlineUserAdd } from "react-icons/ai";
import { UserProfileAfterLogin } from "../Header";

export const SellContentHeader = () => {
  const linkData = [
    {
      id: 1,
      name: "community",
      path: "/contributor/community",
    },
    {
      id: 2,
      name: "trends ",
      path: "/contributor/trends",
    },
    {
      id: 3,
      name: "blog",
      path: "/contributor/blog",
    },
    {
      id: 4,
      name: "help",
      path: "/contributor/help",
    },
  ];

  const userlogin = true;

  return (
    <>
      <div className="sell-content-header bg-white z-50 shadow-md py-2.5 sticky top-0 left-0 w-full">
        <div className="flex items-center justify-between containers">
          <div className="flex items-center gap-10">
            <div className="logo flex gap-1 items-center">
              <LogoText />
              <h3 className="font-normal text-2xl">Contributor</h3>
            </div>
            <div className="nav">
              <ul className="flex items-center gap-5 capitalize">
                {linkData.map((link) => (
                  <li key={link.id}>
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="account flex gap-3">
            {userlogin ? (
              <>
                <UserProfileAfterLogin />
              </>
            ) : (
              <>
                <Link href="/contributor/login">
                  <button className="primary-outline-btn px-6 py-2.5 rounded-md flex items-center gap-2">
                    <AiOutlineUserAdd size={18} />
                    <span>Login</span>
                  </button>
                </Link>
                <Link href="/contributor/register">
                  <button className="primary-btn px-8 py-2.5 rounded-md">Sign up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
