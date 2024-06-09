import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "360px",
			// @media (min-width: 360px)
			sm: "425px",
			// @media (min-width: 425px)
			md: "768px",
			// @media (min-width: 768px)
			lg: "1024px",
			// @media (min-width: 1024px)
			xl: "1440px",
			// @media (min-width: 1440px)
		},
		extend: {},
	},
	plugins: [],
};
export default config;
