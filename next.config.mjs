import createNextIntlPlugin from "next-Intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const NextConfig = {};

export default withNextIntl(NextConfig);
