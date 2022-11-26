import {useQuery} from '@tanstack/react-query';
import React, {useContext} from 'react';
import {AuthContext} from '../../../../Context/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

const MyOrders = () => {
	const {user} = useContext(AuthContext);
	const {data: myOrders = [], isLoading} = useQuery({
		queryKey: ['products', user?.email],
		queryFn: async () => {
			const res = await fetch(`http://localhost:5000/products/${user?.email}`);
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Loader></Loader>;
	}
	return (
		<div>
			<h2>this is my order</h2>
		</div>
	);
};

export default MyOrders;
