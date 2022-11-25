import React, {useContext, useState} from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from '../../../Context/AuthProvider';

const Modal = ({product}) => {
	const {name, price, og_price} = product;
	const {user} = useContext(AuthContext);
	const [buyProduct, setBuyProduct] = useState({});

	const handlBuyProduct = () => {
		if (!buyProduct.phone && !buyProduct.location) {
			toast.error(`Opps! Plaese Input Phone And Meeting Location`, {
				style: {
					border: '1px solid #6C4AB6',
					padding: '16px',
					color: '#6C4AB6',
					fontWeight: 'bold',
				},
			});
		} else {
			toast.success('Order Confirmd', {
				style: {
					border: '1px solid #6C4AB6',
					padding: '16px',
					color: '#6C4AB6',
					fontWeight: 'bold',
				},
			});
		}
	};
	const inputData = (e) => {
		let value = e.target.value;
		const field = e.target.name;
		const newUser = {...buyProduct};
		newUser[field] = value;
		setBuyProduct(newUser);
	};
	return (
		<div>
			<input type="checkbox" id="by-product" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<form className="modal-box">
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
						<label
							type="submmit"
							onClick={handlBuyProduct}
							htmlFor="by-product"
							className="btn btn-outline btn-primary"
						>
							Buy Now
						</label>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;
