import React from 'react';
import Modal from '../Modal/Modal';

const SingleCategoryProduct = ({product}) => {
	// const [userData, setUserData] = useState([]);
	const {name, price, og_price, seller_name, uses, img, location} = product;
	const handleProductStatus = (customer) => {
		console.log(customer);
		const soldItem = {
			name,
			price,
			og_price,
			seller_name,
			uses,
			img,
			location,
			meetLocation: customer.loaction,
			number: customer.phone,
		};
		console.log('🚀🚀: handleProductStatus -> soldItem', soldItem);
	};
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
					<label htmlFor="by-product" className="btn  btn-primary">
						Buy Now
					</label>
				</div>
			</div>

			<Modal handleProductStatus={handleProductStatus} product={product}></Modal>
		</div>
	);
};

export default SingleCategoryProduct;
