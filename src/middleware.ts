import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const handleI18nAndAuth = async (request: NextRequest) => {
  // Get the pathname from the URL
  const path = request.nextUrl.pathname;

  const isAuthRoute = path.includes("/sign-in") || path.includes("/sign-up");

  const token = request.cookies.get("jwt")?.value;

  // If user is logged in (has JWT) and tries to access auth routes, redirect to home
  // We need to maintain the locale in the redirect
  if (isAuthRoute && token) {
    const locale = path.startsWith("/ar") ? "ar" : "en";
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // If no redirect is needed, proceed with i18n middleware
  const i18nMiddleware = createMiddleware({
    locales: ["en", "ar"],
    defaultLocale: "en",
  });

  return i18nMiddleware(request);
};

export default handleI18nAndAuth;

export const config = {
  matcher: ["/", "/(ar|en)/:path*", "/(ar|en)?/sign-in", "/(ar|en)?/sign-up"],
};
