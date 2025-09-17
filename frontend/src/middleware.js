import { NextResponse } from "next/server"
import middlewareAuth from "./utils/middlewareAuth";

export async function middleware(request) {
    const { pathname } = request.nextUrl;
    const user = await middlewareAuth(request);

    if (pathname.startsWith('/profile')) {
        if (!user) return NextResponse.redirect(new URL('/signin', request.nextUrl))
    }

    if (pathname.startsWith('/signin') || pathname.startsWith('/signup')) {
        if (user) return NextResponse.redirect(new URL('/', request.nextUrl))
    }
}

export const config = {
    matcher: ['/profile/:path*', '/signin', '/signup']
}