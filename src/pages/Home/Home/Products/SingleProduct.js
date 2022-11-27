import React from 'react';
import {Link} from 'react-router-dom';

const SingleProduct = ({category}) => {
	const {category_id, category_name, img} = category;
	return (
		<div className="card m-3 md:0 md:w-96 bg-base-100 shadow-xl image-full">
			<figure>
				<img src={img} alt="Shoes" />
			</figure>
			<div className="card-body justify-center items-center">
				<h2 className="card-title text-white uppercase">{category_name}</h2>
				<div className="card-actions mt-4 w-full">
					<Link to={`/products/${category_id}`} className="w-full">
						<button className="btn btn-primary w-full text-white">
							See {category_name} category
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
