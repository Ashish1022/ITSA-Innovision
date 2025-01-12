/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lovely-spider-570.convex.cloud"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            },
        ]
    },
    typescript:{
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

export default nextConfig;
