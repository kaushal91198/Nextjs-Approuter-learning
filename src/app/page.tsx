"use client";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { apiCall, requestTypes } from "@/axios";
import { AUTH_API_BASE_PATH, AUTH_PORT } from "@/constant/apiEndPoint.constant";
import { removeUser } from "@/redux/slices/userSlice";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import Banner from "@/components/Banner";

export default function DashboardPage() {
  const { user } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await apiCall(
        {
          method: requestTypes.GET,
          url: `${AUTH_API_BASE_PATH}/logout`,
        },
        AUTH_PORT
      );
      dispatch(removeUser());
      router.push("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        <Banner />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
}
