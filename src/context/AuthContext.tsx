"use client";

import { apiCall, requestTypes } from "@/axios";
import { AUTH_API_BASE_PATH } from "@/constant/apiEndPoint.constant";
import { setUser } from "@/redux/slices/userSlice";
import { AppDispatch, RootState, useAppDispatch } from "@/redux/store";
import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function AuthContext() {
  const dispatch: AppDispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();
  
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    loadUser();
  });

  const loadUser = async () => {
    try {
      if (!isAuthenticated) {
        const user = await apiCall({
          method: requestTypes.GET,
          url: `${AUTH_API_BASE_PATH}/status`,
        });
        if (user?.data) {
          dispatch(setUser(user?.data));
        }
      }
      if (pathname === "/login") {
        router.push("/");
      }
    } catch (error: any) {
      router.push("/login");
    }
  };

  return null; // This component doesn't render anything
}
