import React from "react";
import Blogs from "./Blogs";
import { blog_data } from "../../blogData";
const AllBlogs = () => {
	return (
		<div className="ct-container grid grid-cols-4 gap-5 mt-10">
			{blog_data.map((blog: any) => (
				<Blogs key={blog.id} blog={blog} />
			))}
		</div>
	);
};

export default AllBlogs;
