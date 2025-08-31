import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // 反向代理API
    async rewrites() {
        return [
            // Cwall的API
            {
                source: "/cwall",
                destination: "https://c4.cwall.xyz",
            },
            // Yunmo的API
            {
                source: "/yunmo",
                destination: "https://yunmo.aimeegroup.top",
            },
        ];
    },
};

export default nextConfig;
