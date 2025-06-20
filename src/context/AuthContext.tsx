"use client";

import Loader from "@/app/loading";
import { apiCall, requestTypes } from "@/axios";
import { AUTH_API_BASE_PATH, AUTH_PORT } from "@/constant/apiEndPoint.constant";
import { setUser } from "@/redux/slices/userSlice";
import { AppDispatch, RootState, useAppDispatch } from "@/redux/store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch: AppDispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(true);
  const redirected = useRef(false);

  useEffect(() => {
    // if (pathname === "/login") {
    //   console.log("smdjknkn")
    //   setLoading(false);
    //   return;
    // }
    // loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    try {
      setLoading(true);

      if (!isAuthenticated) {
        const user = await apiCall(
          {
            method: requestTypes.GET,
            url: `${AUTH_API_BASE_PATH}/status`,
          },
          AUTH_PORT
        );
        if (user) {
          dispatch(setUser(user));
        }
      }

      setLoading(false);
    } catch (error: any) {
      if (
        error?.message === "Unauthorized: Please log in." &&
        !redirected.current
      ) {
        redirected.current = true; // prevent double redirect
        router.push("/login");
      }
    }
  };

  // Show loader until loading is finished or redirected
  // if (loading && !redirected.current) {
  //   return <Loader />;
  // }

  return <>{children}</>;
}
