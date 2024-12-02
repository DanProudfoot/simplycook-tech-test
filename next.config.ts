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
			{
				protocol: "https",
				hostname: "simplycook.imgix.net",
				pathname: "/recipes/**",
			},
		],
	},
});

export default nextConfig;
