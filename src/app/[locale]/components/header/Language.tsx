"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
const Language = () => {
	const [isDropDwon, setIsDropDown] = useState(false);
	const [Language, setLanguage] = useState("Bn");

	const handleDropDown = () => {
		setIsDropDown(!isDropDwon);
	};

	const handleLanguageChange = (language: string) => {
		setLanguage(language);
		setIsDropDown(false);
	};
	return (
		<div className="w-[10%] relative">
			<div className="w-full">
				<div
					className="w-full py-1 px-2 rounded flex items-end justify-between border border-white cursor-pointer text-white"
					onClick={handleDropDown}
				>
					<span className=" capitalize">{Language}</span>
					<div>
						{isDropDwon ? (
							<RiArrowDropDownLine className="text-2xl" />
						) : (
							<RiArrowDropUpLine className="text-2xl" />
						)}
					</div>
				</div>
				<ul
					className={`capitalize absolute mt-1 rounded w-full bg-white border border-black cursor-pointer ${
						isDropDwon ? "" : "hidden"
					} `}
				>
					<li
						className=" p-2 hover:bg-black hover:text-white"
						onClick={() => handleLanguageChange("en")}
					>
						English
					</li>
					<li
						className=" p-2 hover:bg-black hover:text-white"
						onClick={() => handleLanguageChange("bn")}
					>
						bangla
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Language;
