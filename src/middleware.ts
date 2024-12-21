import createMiddleware from "next-intl/middleware";
// api/v1/auth/isAuthenticated  post
export default createMiddleware({
  locales: ["en", "ar"],

  defaultLocale: "en",
});
export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en)/:path*"],
};
