/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    domains: ["api.jerdeshkg.ru", "jerdeshkg.ru"],
  },
};

export default withNextIntl(nextConfig);
