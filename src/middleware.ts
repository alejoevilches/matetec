import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest){
    const cookieStore=await cookies();
    const userCookie=cookieStore.get('user');

    const isLoginPage = request.nextUrl.pathname === "/login";
    const isDashboard = request.nextUrl.pathname === "/"; 

    if (userCookie && isLoginPage) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (!userCookie && isDashboard) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/login", "/"],
}