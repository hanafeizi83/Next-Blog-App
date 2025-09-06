import { NextResponse } from "next/server"
import middlewareAuth from "./utils/middlewareAuth";

export async function middleware(request) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/profile')) {
        const user = middlewareAuth(request);
        if (!user) return NextResponse.redirect(new URL('/signin', request.nextUrl))
    }

    if (pathname.startsWith('/signin') || pathname.startsWith('/signup')) {
        const user = middlewareAuth(request);
        if (user) return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    const headers = new Headers(request.headers);
    headers.set("x-current-path", request.nextUrl.pathname);
    return NextResponse.next({ headers });
}

export const config = {
    matcher: ['/profile/:path*', '/signin', '/signup' ,"/((?!api|_next/static|_next/image|favicon.ico).*)"]
}