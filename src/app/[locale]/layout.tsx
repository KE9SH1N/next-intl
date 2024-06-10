import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import NavBar from "./components/header/NavBar";
import Language from "./components/header/Language";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const messages = useMessages();
	return (
		<html lang={locale}>
			<body className={inter.className}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<div className="w-full bg-slate-500">
						<div className="ct-container flex items-center justify-between">
							<NavBar />
							<Language />
						</div>
					</div>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
