import {useQuery} from '@tanstack/react-query';
import React, {useContext} from 'react';
import {AuthContext} from '../../../../Context/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

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
			<div className="order-container">{myOrders.length}</div>
		</div>
	);
};

export default MyOrders;
