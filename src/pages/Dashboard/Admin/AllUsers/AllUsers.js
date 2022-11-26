import {useQuery} from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Shared/Loader/Loader';

const AllUsers = () => {
	const {data: users = [], isLoading} = useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			const res = await fetch(`http://localhost:5000/users`);
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Loader></Loader>;
	}
	return <div></div>;
};

export default AllUsers;
