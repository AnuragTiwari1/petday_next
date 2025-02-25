import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

const protectedRoutes = ["/customer"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  const session = await getSession();

  if (isProtectedRoute && !session?.sub) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
