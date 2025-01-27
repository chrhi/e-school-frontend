import createMiddleware from "next-intl/middleware";

import type { NextRequest } from "next/server";

const handleI18nAndAuth = async (request: NextRequest) => {
  const i18nMiddleware = createMiddleware({
    locales: ["en", "ar", "fr"],
    defaultLocale: "en",
  });

  return i18nMiddleware(request);
};

export default handleI18nAndAuth;

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
