"use client";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { apiCall, requestTypes } from "@/axios";
import { AUTH_API_BASE_PATH } from "@/constant/apiEndPoint.constant";
import { removeUser } from "@/redux/slices/userSlice";

export default function DashboardPage() {
  const { user } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await apiCall({
        method: requestTypes.GET,
        url: `${AUTH_API_BASE_PATH}/logout`,
      });
      dispatch(removeUser());
      router.push("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome back, {user?.name || "User"} 👋
            </h1>
            <p className="text-gray-500">
              Here’s what’s happening with your account today.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </header>

        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Your Info</h2>
          <ul className="text-gray-700 space-y-1">
            <li>
              <strong>Name:</strong> {user?.name}
            </li>
            <li>
              <strong>Email:</strong> {user?.email}
            </li>
            <li>
              <strong>Role:</strong> {user?.roles[0] || "Standard User"}
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Logged in from Chrome (India) - 5 minutes ago</li>
            <li>Changed password - 3 days ago</li>
            <li>Accessed protected page - 1 week ago</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
