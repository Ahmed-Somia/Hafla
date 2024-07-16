"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const links = [
    "/",
    "/services",
    "/categories",
    "/about-us",
    "/blog",
    "/contact",
  ];
  const isConnected = false;
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <nav
      className={`h-[107px] fixed top-0 left-0 right-0 w-full ${
        isHomePage ? "bg-white" : "bg-customBlue"
      } z-50 rounded-b-3xl`}
    >
      <div className="flex-between h-full w-full paddings inner-width">
        <Link href="/">
          <Image
            src={isHomePage ? "/assets/logo.png" : "/assets/logo2.png"}
            alt="logo"
            width={80}
            height={80}
            priority={true}
            className="w-auto h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {links.map((link) => (
            <li key={link} className={isHomePage ? "link_home" : "link"}>
              <Link href={link}>{link === "/" ? "Home" : link.slice(1)}</Link>
            </li>
          ))}
        </ul>

        <div className="lg:flex hidden gap-3">
          {!isConnected ? (
            <>
              <button
                className={`${
                  isHomePage ? "outline_btn" : "outline_btn_alt"
                } text-2xl border-none`}
              >
                Log in
              </button>
              <button
                className={`${
                  isHomePage ? "blue_btn" : "blue_btn_alt"
                } text-2xl`}
              >
                Sign up
              </button>
            </>
          ) : (
            <button
              className={`${isHomePage ? "blue_btn" : "blue_btn_alt"} text-2xl`}
            >
              Log out
            </button>
          )}
        </div>

        <div className="lg:hidden cursor-pointer">
          <Image
            src={isHomePage ? "/assets/nav_home.svg" : "/assets/nav.svg"}
            width={37}
            height={37}
            alt="mobileNavBar"
            className="w-auto h-auto"
            onClick={() => setToggleDropdown((prev) => !prev)}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 p-10 ease-in duration-500 ${
          toggleDropdown
            ? `left-0 w-[65%] sm:w-[35%] h-screen lg:hidden ${
                isHomePage ? "bg-white" : "bg-customBlue"
              }`
            : "left-[-100%]"
        }`}
      >
        <div className="flex-center flex-col gap-y-8">
          <ul className="flex-center flex-col gap-[inherit]">
            {links.map((link) => (
              <li
                key={link}
                className={isHomePage ? "link_home" : "link"}
                onClick={() => setToggleDropdown((prev) => !prev)}
              >
                <Link href={link}>{link === "/" ? "Home" : link.slice(1)}</Link>
              </li>
            ))}
          </ul>
          {!isConnected ? (
            <>
              <button
                className={`${
                  isHomePage ? "blue_btn" : "blue_btn_alt"
                } text-2xl min-w-[100%]`}
              >
                Sign up
              </button>
              <button
                className={`${
                  isHomePage ? "blue_btn" : "blue_btn_alt"
                } text-2xl min-w-[100%]`}
              >
                Log in
              </button>
            </>
          ) : (
            <button
              className={`${
                isHomePage ? "blue_btn" : "blue_btn_alt"
              } text-2xl min-w-[100%]`}
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
