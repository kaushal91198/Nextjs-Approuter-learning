// middleware.ts
import { NextResponse, NextRequest } from "next/server";
import { cookies } from 'next/headers';

export async function middleware(req: NextRequest) {
  try {
    const cookieStore: any = await cookies();
    const refreshToken = cookieStore?.get('refreshToken');
    const path = req.nextUrl.pathname;
    if (refreshToken || path === '/login') {
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', req.url));

  } catch (error) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}


