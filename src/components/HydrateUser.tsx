// app/components/HydrateUser.tsx
"use client";

import { setUser } from "@/redux/slices/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function HydrateUser({ user }: { user: any }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return null;
}
