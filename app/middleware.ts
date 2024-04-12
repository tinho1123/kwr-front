import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest){
    console.log(request);
    return NextResponse.redirect(new URL('/dashboard', request.url));
}

export const config = {
  matcher: '/',
}