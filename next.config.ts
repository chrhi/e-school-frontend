import withNextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl("./i18n.ts")(nextConfig);
