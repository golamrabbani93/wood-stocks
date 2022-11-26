import {useQuery} from '@tanstack/react-query';
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import UseTitle from '../../../hooks/UseTitle';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import SingleCategoryProduct from './SingleCategoryProduct';

const CategoryProducts = () => {
	UseTitle(`Products | Woods Stocks`);
	const [buyProduct, setBuyProduct] = useState(null);
	const {category_id} = useParams();
	const {data: products = [], isLoading} = useQuery({
		queryKey: ['products', category_id],
		queryFn: async () => {
			const res = await fetch(`http://localhost:5000/products/${category_id}`);
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Loader></Loader>;
	}
	return (
		<div className="mt-12 container mx-auto">
			<h2 className="text-primary text-4xl font-semibold uppercase">{products[0].category_name}</h2>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10">
				{products.map((product) => (
					<SingleCategoryProduct
						setBuyProduct={setBuyProduct}
						key={product._id}
						product={product}
					></SingleCategoryProduct>
				))}
			</div>
			{buyProduct && <Modal setBuyProduct={setBuyProduct} product={buyProduct}></Modal>}
		</div>
	);
};

export default CategoryProducts;
