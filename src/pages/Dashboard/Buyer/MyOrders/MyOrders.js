import {useQuery} from '@tanstack/react-query';
import React, {useContext} from 'react';
import {AuthContext} from '../../../../Context/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';
import SingleOrders from './SingleOrders';

const MyOrders = () => {
	const {user} = useContext(AuthContext);
	const {data: myOrders = [], isLoading} = useQuery({
		queryKey: ['orders', user?.email],
		queryFn: async () => {
			const res = await fetch(`http://localhost:5000/orders/?email=${user?.email}`);
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Loader></Loader>;
	}
	return (
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
							{myOrders.map((order) => (
								<SingleOrders key={order._id} order={order}></SingleOrders>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default MyOrders;
