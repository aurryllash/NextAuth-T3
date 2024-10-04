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
    // i18n: {
    //     locales: ['en', 'gd'],
    //     defaultLocale: 'en',
    //   },
};

export default config;