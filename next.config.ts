import withNextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

//@ts-expect-error it is a string anyway
module.exports = withNextIntl("./i18n.ts")(nextConfig);
