import {useQuery} from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Shared/Loader/Loader';
import SingleUser from './SingleUser';

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
	return (
		<div className="overflow-x-auto">
			<table className="table w-full">
				<thead>
					<tr>
						<th>Stage</th>
						<th>Name</th>
						<th>User Role</th>
						<th>User Action</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, i) => (
						<SingleUser key={user._id} user={user} stage={i}></SingleUser>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AllUsers;
