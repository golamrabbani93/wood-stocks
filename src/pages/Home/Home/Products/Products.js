import {useQuery} from '@tanstack/react-query';
import React from 'react';

const Products = () => {
	const {data: productsCategory = []} = useQuery({
		queryKey: ['appointmentOptions'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/categories');
			const data = await res.json();
			return data;
		},
	});

	return (
		<div className="">
			<h2 className="text-primary text-4xl font-semibold">Product Categories</h2>
			<div className="mt-6">{productsCategory.length}</div>
		</div>
	);
};

export default Products;
