import { useTranslations } from "next-intl";
import NavBar from "./components/header/NavBar";
import Language from "./components/header/Language";
import Blogs from "./components/home/Blogs";
import { blog_data } from "./blogData";

export default function Home() {
	// For multi-language
	const t = useTranslations("home");
	return (
		<main>
			<div className="ct-container grid grid-cols-4 gap-5 mt-10">
				{blog_data.map((blog: any) => (
					<Blogs key={blog.id} blog={blog} />
				))}
			</div>
		</main>
	);
}
