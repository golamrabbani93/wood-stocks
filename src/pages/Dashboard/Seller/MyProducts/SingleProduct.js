import React from 'react';

const SingleProduct = ({product, productAd}) => {
	console.log('🚀🚀: SingleProduct -> product', product);
	const {name, date, img, price, productStatus, advertise} = product;

	const splitdate = date.split(' ')[0];
	return (
		<tr>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							<img src={img} alt={name} />
						</div>
					</div>
					<div>
						<div className="font-bold">{name}</div>
						<div className="text-sm opacity-50">{splitdate}</div>
					</div>
				</div>
			</td>
			<td>
				<span className="text-xl font-bold text-primary">{productStatus}</span>
			</td>
			<td>{price}</td>
			<th>
				{productStatus === 'available' ? (
					advertise ? (
						''
					) : (
						<button onClick={() => productAd(product)} className="btn btn-primary btn-xs">
							Advertise
						</button>
					)
				) : (
					<></>
				)}
				<br />
				<button className="btn btn-warning btn-xs">Delete Product</button>
			</th>
		</tr>
	);
};

export default SingleProduct;
