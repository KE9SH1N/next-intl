import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	locales: ["en", "bn"],

	defaultLocale: "bn",
	localeDetection: false,
});

export const config = {
	matcher: ["/", "/(bn|en)/:path*"],
};
