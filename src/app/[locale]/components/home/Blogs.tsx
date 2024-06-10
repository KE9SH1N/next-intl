import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogProps {
	blog: any;
}

const Blogs: React.FC<BlogProps> = ({ blog }: any) => {
	return (
		<div className="border border-teal-500 rounded p-3">
			<div className="py-5">
				<h2>{blog.blog_title}</h2>
				<Image src={blog.blog_image} alt="" width={500} height={500} />
				<p>{blog.blog_des}</p>
			</div>
			<Link
				href={`/bn/blogs/${blog.id}`}
				className=" capitalize py-2 px-4 bg-sky-600 rounded cursor-pointer text-white"
			>
				view
			</Link>
		</div>
	);
};

export default Blogs;
