"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../rtk/feature/languageSlice";

interface BlogProps {
	blog: any;
}

const Blogs: React.FC<BlogProps> = ({ blog }: any) => {
	const selectMultiLanguage = useSelector(selectLanguage);
	return (
		<div className="border border-teal-500 rounded p-3">
			<div className="py-5">
				<h2>
					{selectMultiLanguage === "bn" ? blog.blog_title_bn : blog.blog_title}
				</h2>
				{/* <Image src={blog.blog_image} alt="" width={500} height={500} /> */}
				<p>{selectMultiLanguage === "bn" ? blog.blog_des_bn : blog.blog_des}</p>
			</div>
			<Link
				href={`/${selectMultiLanguage}/blogs/${blog.id}`}
				className=" capitalize py-2 px-4 bg-sky-600 rounded cursor-pointer text-white"
			>
				view
			</Link>
		</div>
	);
};

export default Blogs;
