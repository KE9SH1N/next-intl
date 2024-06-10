import createNextIntlPlugin from "next-Intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const NextConfig = {
	images: {
		domains: ["images.unsplash.com"],
	},
};

export default withNextIntl(NextConfig);
