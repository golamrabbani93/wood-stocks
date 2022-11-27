import React from 'react';

const SingleUser = ({user, stage, handleDeleteBuyer, verifySeller}) => {
	return (
		<tr className="hover">
			<th>{stage + 1}</th>
			<td>{user.name}</td>
			<td>{user.userRole}</td>
			<th>
				{user.userRole === 'Seller' &&
					(user?.seller === 'verified' ? (
						<button
							onClick={() => verifySeller(user)}
							className="btn btn-primary btn-xs mr-2 btn-disabled"
						>
							Verified
						</button>
					) : (
						<button
							onClick={() => verifySeller(user)}
							className="btn btn-primary btn-xs mr-2 disabled"
						>
							Verify
						</button>
					))}

				<button
					onClick={() => handleDeleteBuyer(user)}
					className="btn btn-accent bg-red-700 text-white btn-xs"
				>
					Delete
				</button>
			</th>
		</tr>
	);
};

export default SingleUser;
