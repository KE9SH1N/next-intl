import { useTranslations } from "next-intl";
import AllBlogs from "./components/home/AllBlogs";

export default function Home() {
	// For multi-language
	const t = useTranslations("home");
	return (
		<main>
			<AllBlogs />
		</main>
	);
}
