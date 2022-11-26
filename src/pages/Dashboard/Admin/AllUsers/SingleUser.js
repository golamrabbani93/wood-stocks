import React from 'react';

const SingleUser = ({user, stage}) => {
	return (
		<tr className="hover">
			<th>{stage + 1}</th>
			<td>{user.name}</td>
			<td>{user.userRole}</td>
			<th>
				<button className="btn btn-primary btn-xs mr-2">Verify</button>

				<button className="btn btn-accent bg-red-700 text-white btn-xs">Delete</button>
			</th>
		</tr>
	);
};

export default SingleUser;
