await import("./src/env.js");


/** @type {import("next").NextConfig} */
const config = {
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "fakeimg.pl",
            "qbsay.com"
        ]
    },
};

// export default config;

// next-intl
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    ...config,
};
 
export default withNextIntl(nextConfig);
