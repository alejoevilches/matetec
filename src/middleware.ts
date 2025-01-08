import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest){
    const cookieStore=await cookies();
    const userCookie=cookieStore.get('user');

    if(userCookie){
        return NextResponse.redirect(new URL('/dashboard', request.url))
    } else {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/']
}