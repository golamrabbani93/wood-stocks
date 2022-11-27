import {useQuery} from '@tanstack/react-query';
import React from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
	const {data: Categories = []} = useQuery({
		queryKey: ['categories'],
		queryFn: async () => {
			const res = await fetch('https://sitpad-server.vercel.app/categories');
			const data = await res.json();
			return data;
		},
	});

	return (
		<div className="">
			<h2 className="text-primary text-4xl font-semibold">Product Categories</h2>
			<div className="mt-6 md:ml-5 grid md:grid-cols-2 lg:grid-cols-3 ">
				{Categories.map((Category) => (
					<SingleProduct key={Category._id} category={Category}></SingleProduct>
				))}
			</div>
		</div>
	);
};

export default Products;
