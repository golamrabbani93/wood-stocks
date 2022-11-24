import React from 'react';
import {useLoaderData} from 'react-router-dom';
import SingleCategoryProduct from './SingleCategoryProduct';

const CategoryProducts = () => {
	const products = useLoaderData();

	return (
		<div className="mt-12 container mx-auto">
			<h2 className="text-primary text-4xl font-semibold uppercase">{products[0].category_name}</h2>
			<div className=" mt-10">
				{products.map((product) => (
					<SingleCategoryProduct key={product._id} product={product}></SingleCategoryProduct>
				))}
			</div>
		</div>
	);
};

export default CategoryProducts;
