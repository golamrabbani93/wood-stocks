import {useQuery} from '@tanstack/react-query';
import React, {useContext} from 'react';
import {AuthContext} from '../../../../Context/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

const MyProducts = () => {
	const {user} = useContext(AuthContext);
	const {data: myProducts = [], isLoading} = useQuery({
		queryKey: ['products', user?.displayName],
		queryFn: async () => {
			const res = await fetch(`http://localhost:5000/products/?name=${user?.displayName}`);
			const data = await res.json();
			return data;
		},
	});

	if (isLoading) {
		return <Loader></Loader>;
	}
	return (
		<div>
			<h2 className="text-left text-primary uppercase text-3xl font-bold">My Products</h2>
			<div className="text-left">
				<h2 className="text-left text-primary uppercase text-3xl font-bold">my order</h2>
				<div className="order-container">
					<div className="overflow-x-auto w-full">
						<table className="table w-full">
							<thead>
								<tr>
									<th>Product</th>
									<th>Customer</th>
									<th>Price</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{myProducts.map((order) => (
									<h2>product</h2>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProducts;
