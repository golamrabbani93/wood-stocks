import React, {useContext, useState} from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from '../../../Context/AuthProvider';

const Modal = ({product, setBuyProduct}) => {
	const {_id, name, price, og_price, seller_name, uses, img, location} = product;
	const {user} = useContext(AuthContext);
	const [productData, SetProductData] = useState({});

	const handlBuyProduct = (e) => {
		e.preventDefault();
		const form = e.target;
		console.log('🚀🚀: handlBuyProduct -> form', form);

		if (!productData.phone && !productData.location) {
			toast.error(`Opps! Plaese Input Phone And Meeting Location`, {
				style: {
					border: '1px solid #D94A38',
					padding: '16px',
					color: '#D94A38',
					fontWeight: 'bold',
				},
			});
		} else {
			handleProductStatus(productData);
			updateProduct(_id);
			setBuyProduct(null);
		}
		form.reset();
	};
	const inputData = (e) => {
		let value = e.target.value;
		const field = e.target.name;
		const newUser = {...productData};
		newUser[field] = value;
		SetProductData(newUser);
	};

	const handleProductStatus = (customer) => {
		const soldItem = {
			id: _id,
			name,
			price,
			og_price,
			seller_name,
			uses,
			img,
			location,
			meetLocation: customer.loaction,
			number: customer.phone,
			email: user?.email,
			customerName: user?.displayName,
		};
		console.log(soldItem);
		fetch('http://localhost:5000/soldproduct', {
			method: 'POST',
			headers: {
				'content-Type': 'application/json',
			},
			body: JSON.stringify(soldItem),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success('Order Confirmd', {
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

	const updateProduct = (_id) => {
		const status = {
			productStatus: 'Sold',
		};
		fetch(`http://localhost:5000/updateproduct/${_id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(status),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
				}
			});
	};
	return (
		<div>
			<input type="checkbox" id="by-product" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<form onSubmit={handlBuyProduct} className="modal-box relative">
					<label htmlFor="by-product" className="btn btn-sm btn-circle absolute right-2 top-2 ">
						✕
					</label>
					<h3 className="font-bold text-2xl mb-1">{name}</h3>
					<p className="text-2xl text-primary mb-3">
						Price : <span className="font-bold"> ${price}</span>{' '}
						<del className="text-secondary">{og_price}</del>
					</p>
					<input
						type="text"
						defaultValue={user?.displayName}
						readOnly
						className="input input-bordered input-primary w-full max-w-xs mb-3"
					/>
					<input
						type="text"
						defaultValue={user?.email}
						readOnly
						className="input input-bordered input-primary w-full max-w-xs mb-3"
					/>
					<input
						onBlur={inputData}
						type="text"
						name="phone"
						placeholder="Your Phone"
						className="input input-bordered input-primary w-full max-w-xs mb-3"
					/>
					<input
						onBlur={inputData}
						type="text"
						name="loaction"
						placeholder="Meeting Location"
						className="input input-bordered input-primary w-full max-w-xs mb-3"
					/>

					<div className="modal-action">
						<button type="submit" htmlFor="by-product" className="btn btn-outline btn-primary">
							Buy Now
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;
