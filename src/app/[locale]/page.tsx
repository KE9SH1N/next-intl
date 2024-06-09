import { useTranslations } from "next-intl";
import NavBar from "./components/header/NavBar";
import Language from "./components/header/Language";

export default function Home() {
	// For multi-language
	const t = useTranslations("home");
	return (
		<main>
			<div className="w-full bg-slate-500">
				<div className="ct-container flex items-center justify-between">
					<NavBar />
					<Language />
				</div>
			</div>
		</main>
	);
}
