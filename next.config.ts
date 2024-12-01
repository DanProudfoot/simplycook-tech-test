import { withPigment } from "@pigment-css/nextjs-plugin";

const nextConfig = withPigment({
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.simplycook.com",
				pathname: "/uploads/media/**",
			},
		],
	},
});

export default nextConfig;
