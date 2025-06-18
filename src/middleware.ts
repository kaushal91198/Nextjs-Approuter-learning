// middleware.ts
import { NextResponse, NextRequest } from "next/server";
import { cookies } from 'next/headers';

export async function middleware(req: NextRequest) {
  try {
    // const cookieStore: any = await cookies();
    // const refreshToken = cookieStore?.get('refreshToken');
    // const path = req.nextUrl.pathname;
    // if (!refreshToken && path !== '/login') {
    //   return NextResponse.redirect(new URL('/login', req.url));
    // }
    // if (refreshToken && path === '/login') {
    //   return NextResponse.redirect(new URL('/', req.url));
    // }
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/login', req.url))
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
