import React from 'react';
import {FaCheckCircle} from 'react-icons/fa';
const SingleCategoryProduct = ({product, setBuyProduct}) => {
	const {
		date,
		condition,
		name,
		price,
		og_price,
		seller_name,
		uses,
		img,
		location,
		seller,
		purchase,
	} = product;
	const splitdate = date.split(' ')[0];
	return (
		<div className="card card-compact w-96 bg-base-100 shadow-xl text-left">
			<figure className="rounded-3xl">
				<img src={img} alt="Shoes" style={{height: '270px'}} />
			</figure>
			<div className="card-body -mt-2">
				<h2 className="card-title text-2xl">{name}</h2>
				<div className="details grid grid-cols-2 ">
					<div className="">
						<p className="text-xl text-primary">
							Price : <span className="font-bold"> ${price}</span>{' '}
							<del className="text-secondary">{og_price}</del>
						</p>
						<p className="text-xs font-bold flex">
							Seller Name: <span className="text-primary mr-1">{seller_name}</span>
							{seller && <FaCheckCircle className="text-success"></FaCheckCircle>}
						</p>
						<p className="text-xs font-bold">
							Condition: <span className="text-primary">{condition}</span>
						</p>
						<p className="text-xs font-bold">
							Post Date: <span className="text-primary">{splitdate}</span>
						</p>
					</div>
					<div className="ml-4">
						<p className="text-sm font-bold">
							Uses: <span className="text-primary">{uses} Year</span>
						</p>
						<p className="text-sm font-bold">
							Purchase Date: <span className="text-primary">{purchase}</span>
						</p>
						<p className="text-sm font-bold">
							Location: <span className="text-primary">{location}</span>
						</p>
					</div>
				</div>
				<div className="card-actions justify-end">
					<label
						onClick={() => setBuyProduct(product)}
						htmlFor="by-product"
						className="btn  btn-primary"
					>
						Buy Now
					</label>
				</div>
			</div>
		</div>
	);
};

export default SingleCategoryProduct;
