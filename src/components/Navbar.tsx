"use client";
import React, { Fragment } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
import Button from "./button";
import { useLogout } from "@/hooks/auth/useLogin";
import { useRouter } from "next/navigation";
import { removeUser } from "@/redux/slices/userSlice";
import { useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
// import { cookies } from "next/headers";

const Navbar = ({ isAdmin }: { isAdmin?: Boolean }) => {
  const { getLogout, loading: logoutLoader } = useLogout();
  const router = useRouter();
  const user = useSelector((state: any) => state.user);
  const dispatch = useAppDispatch();
  const logout = async () => {
    if (user.isAuthenticated) {
      await getLogout();
      dispatch(removeUser());
    }
    router.push("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        src={assets.logo}
        alt="logo"
      />
      {isAdmin ? (
        <Button
          type="button"
          classname="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer"
          onlyDisable={logoutLoader}
          onClickHandler={() => logout()}
          loader={true}
        >
          Log out
        </Button>
      ) : (
        <Fragment>
          <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
            <Link href="/" className="hover:text-gray-900 transition">
              Home
            </Link>
            <Link
              href="/all-products"
              className="hover:text-gray-900 transition"
            >
              Shop
            </Link>
            <Link href="/" className="hover:text-gray-900 transition">
              About Us
            </Link>
            <Link href="/" className="hover:text-gray-900 transition">
              Contact
            </Link>
          </div>

          <ul className="hidden md:flex items-center gap-4 ">
            <Image
              className="w-4 h-4"
              src={assets.search_icon}
              alt="search icon"
            />
            <Button classname=" hover:text-gray-900 transition">
              <div className="flex items-center gap-2">
                <Image src={assets.user_icon} alt="user icon" />
                <span>Account</span>
              </div>
            </Button>
            <Button
              type="button"
              classname="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer"
              onlyDisable={logoutLoader}
              onClickHandler={() => logout()}
              loader={true}
            >
              {!user.isAuthenticated ? "Login" : "Log out"}
            </Button>
          </ul>
        </Fragment>
      )}
    </nav>
  );
};

export default Navbar;
