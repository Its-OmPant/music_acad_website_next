import type { NextConfig } from "next";

const isProdEnv = process.env.NODE_ENV == "production";

const nextConfig: NextConfig = {
	output: "export",
	basePath: isProdEnv ? "/music_acad_website_next" : "",
	assetPrefix: isProdEnv ? "/music_acad_website_next" : "",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
