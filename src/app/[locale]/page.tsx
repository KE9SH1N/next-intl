import { useTranslations } from "next-intl";

export default function Home() {
	// For multi-language
	const t = useTranslations("home");
	return (
		<main>
			<div className="capitalize">
				<div className="max-w-[1440px] mx-auto mt-24">
					<p className="text-center">{t("title")}</p>
				</div>
			</div>
		</main>
	);
}
