import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { useSelector } from "react-redux";
import { RootState } from "./store/store";

export function middleware(req: NextRequest) {
    // const token = req.cookies.get("token");
    // const token = useSelector((state: RootState) => state.auth.token || "");

    // if (!token && req.nextUrl.pathname.startsWith("/admin/dashboard")) {
    //     return NextResponse.redirect(new URL("/admin/login", req.url));
    // }
    return NextResponse.next();
}

export const config = {
    // matcher: ["/admin/dashboard/:path*"],
};
