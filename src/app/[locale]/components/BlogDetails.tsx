"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { blog_data } from "../blogData";
import { useSelector } from "react-redux";
import { selectLanguage } from "../rtk/feature/languageSlice";

interface ProductDetails {
	id: number;
	blog_title: string;
	blog_des: string;
	blog_image: string;
	blog_title_bn: string;
	blog_des_bn: string;
}

const BlogDetails = () => {
	const params = useParams();
	const productSlug = parseInt(params.id[0]);

	const getProductDetailsById = (id: number): ProductDetails | undefined => {
		return blog_data.find((product) => product.id === id);
	};
	const productDetails = getProductDetailsById(productSlug);

	const selectMultiLanguage = useSelector(selectLanguage);

	return (
		<div className="ct-container mt-10">
			<h1>
				{selectMultiLanguage === "bn"
					? productDetails?.blog_title_bn
					: productDetails?.blog_title}
			</h1>
			{/* <Image src={productDetails?.blog_image} alt="" width={400} height={800} /> */}
			<p>
				{selectMultiLanguage === "bn"
					? productDetails?.blog_des_bn
					: productDetails?.blog_des}
			</p>
		</div>
	);
};

export default BlogDetails;
