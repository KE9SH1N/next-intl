"use client";
import Link from "next/link";
import React from "react";
import { selectLanguage } from "../../rtk/feature/languageSlice";
import { useSelector } from "react-redux";

const NavBar = () => {
	const selectMultiLanguage = useSelector(selectLanguage);
	return (
		<div className="w-[70%]">
			<ul className=" capitalize flex items-center justify-start space-x-4 py-4 text-white">
				<Link href="/">
					<li>home</li>
				</Link>
				<Link href={`/${selectMultiLanguage}/blogs`}>
					<li>blogs</li>
				</Link>
			</ul>
		</div>
	);
};

export default NavBar;
