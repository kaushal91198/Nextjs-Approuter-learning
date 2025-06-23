import { NextResponse, NextRequest } from "next/server";
import { cookies } from 'next/headers';
import { generateAccessToken, requestTypes, sendRequest } from "./axios";
import { AUTH_API_BASE_PATH, AUTH_PORT } from "./constant/apiEndPoint.constant";
import axios from "axios";

export async function middleware(req: NextRequest) {
  const axiosInstance = axios.create({});
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");
  const config = {
    method: requestTypes.GET,
    url: `${AUTH_API_BASE_PATH}/status`,
    headers: {
      Cookie: cookieHeader
    }
  }
  const { pathname } = req.nextUrl;
  try {
    const res = await sendRequest(axiosInstance, config, AUTH_PORT)
    const response = NextResponse.next();
    response.cookies.set("user", JSON.stringify(res.data), {
      httpOnly: true,
      secure: true
    });

    if (pathname.includes("admin") && !res.data.roles.includes('admin')) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return response
  } catch (error: any) {
    if (error.status === 401) {
      try {
        await generateAccessToken(axiosInstance, {
          Cookie: cookieHeader
        });
        await sendRequest(axiosInstance, config, AUTH_PORT)
      }
      catch (e: any) {
        if (pathname !== '/login') {
          cookieStore.delete("user");
          return NextResponse.redirect(new URL('/login', req.url));
        }
      }
    }
    if (pathname !== '/login') {
      cookieStore.delete("user");
      return NextResponse.redirect(new URL('/login', req.url));
    }
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Protect only specific routes:
     * - all app routes except: /login, /_next/, /api/, etc.
     */
    '/((?!_next|favicon.ico|api|static).*)',
  ],
};
