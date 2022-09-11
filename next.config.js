/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: `http://dongore-backend2.herokuapp.com/:path*`,
            },
        ];
    },
};

module.exports = nextConfig;
