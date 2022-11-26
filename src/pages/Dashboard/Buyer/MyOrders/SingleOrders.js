import React from 'react';

const SingleOrders = ({order}) => {
	const {img, name, price, customerName, location, number} = order;
	return (
		<tr>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							<img src={img} alt="Avatar Tailwind CSS Component" />
						</div>
					</div>
					<div>
						<div className="font-bold">{name}</div>
						<div className="text-sm opacity-50">{location}</div>
					</div>
				</div>
			</td>
			<td>
				{customerName}
				<br />
				<span className="badge badge-ghost badge-sm">{number}</span>
			</td>
			<td>${price}</td>
			<th>
				<button className="btn btn-primary btn-xs">Pay Now</button>
			</th>
		</tr>
	);
};

export default SingleOrders;
