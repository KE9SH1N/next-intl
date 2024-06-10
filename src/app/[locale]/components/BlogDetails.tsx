"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { blog_data } from "../blogData";

const BlogDetails = () => {
	const params = useParams();
	const productSlug = parseInt(params.id[0]);
	console.log(typeof productSlug);
	console.log("data", blog_data);

	const getProductDetailsById = (id: any) => {
		return blog_data.find((product) => product.id === id);
	};
	const productDetails = getProductDetailsById(productSlug);
	console.log(productDetails);
	return (
		<div className="ct-container mt-10">
			<h1>{productDetails?.blog_title}</h1>
			{/* <Image src={productDetails?.blog_image} alt="" height={400} width={800} /> */}
			<p>{productDetails?.blog_des}</p>
		</div>
	);
};

export default BlogDetails;
