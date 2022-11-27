import {useQuery} from '@tanstack/react-query';
import React, {useContext} from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from '../../../../Context/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';
import SingleUser from '../AllUsers/SingleUser';

const Seller = () => {
	const {user} = useContext(AuthContext);
	const {
		data: users = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			const res = await fetch(
				`https://sitpad-server.vercel.app/users/seller/?userRole=Seller&email=${user.email}`,
				{
					headers: {
						authorization: `bearer ${localStorage.getItem('token')}`,
					},
				},
			);
			const data = await res.json();
			return data;
		},
	});
	//*delete buyer
	const handleDeleteBuyer = (deletedUser) => {
		const deleteBuyer = window.confirm('Are You Sure To Delete Your Review');
		if (deleteBuyer) {
			fetch(`http://localhost:5000/users/seller/${deletedUser._id}`, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						refetch();
						toast.success(`User ${deletedUser.name} deleted successfully`);
					}
				});
		}
	};
	//*Seller verify
	const verifySeller = (data) => {
		console.log(data);
		updateUserSeller(data._id);
		refetch();
	};
	const updateUserSeller = (_id) => {
		const seller = {
			seller: 'verified',
		};
		fetch(`http://localhost:5000/verify/seller/${_id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(seller),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast.success('Seller Verified Successfull', {
						style: {
							border: '1px solid #D94A38',
							padding: '16px',
							color: '#D94A38',
							fontWeight: 'bold',
						},
					});
				}
			});
	};
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
						<SingleUser
							verifySeller={verifySeller}
							handleDeleteBuyer={handleDeleteBuyer}
							key={user._id}
							user={user}
							stage={i}
						></SingleUser>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Seller;
