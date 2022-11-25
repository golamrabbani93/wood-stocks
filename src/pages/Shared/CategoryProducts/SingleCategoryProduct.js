import React from 'react';

const SingleCategoryProduct = ({product, setBuyProduct}) => {
	const {name, price, og_price, seller_name, uses, img, location} = product;

	return (
		<div className="card card-compact w-96 bg-base-100 shadow-xl">
			<figure className="rounded-3xl">
				<img src={img} alt="Shoes" style={{height: '270px'}} />
			</figure>
			<div className="card-body -mt-2">
				<h2 className="card-title text-2xl">{name}</h2>
				<div className="details grid grid-cols-2 justify-center items-center">
					<p className="text-2xl text-primary">
						Price : <span className="font-bold"> ${price}</span>{' '}
						<del className="text-secondary">{og_price}</del>
					</p>
					<p className="text-xl font-bold">
						Seller Name: <span className="text-primary">{seller_name}</span>
					</p>
					<p className="text-xl font-bold">
						Time Of Uses: <span className="text-primary">{uses} Month</span>
					</p>
					<p className="text-xl font-bold">
						Location: <span className="text-primary">{location}</span>
					</p>
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
