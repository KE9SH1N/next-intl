import React from "react";
import NavBar from "./NavBar";
import Language from "./Language";

const Navigation = () => {
	return (
		<div className="w-full bg-slate-500">
			<div className="ct-container flex items-center justify-between">
				<NavBar />
				<Language />
			</div>
		</div>
	);
};

export default Navigation;
