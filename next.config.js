// await import("./src/env.js");


// /** @type {import("next").NextConfig} */
// const config = {
//     images: {
//         domains: [
//             "avatars.githubusercontent.com",
//             "fakeimg.pl",
//             "qbsay.com"
//         ]
//     },
//     i18n: {
//         locales: ['en', 'ge'],
//         defaultLocale: 'en',
//       },
// };

// export default config;

import createNextIntlPlugin from 'next-intl/plugin';
 
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default withNextIntl(nextConfig);