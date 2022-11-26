import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import {AuthContext} from '../../../../Context/AuthProvider';

const AddProduct = () => {
	const {user} = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm();
	const handleProduct = (data) => {
		var isodate = new Date();
		var localDateTime = isodate.toLocaleDateString() + ' ' + isodate.toLocaleTimeString();
		const productDetails = {
			img: data.img,
			name: data.name,
			price: data.price,
			og_price: data.og_price,
			uses: data.uses,
			seller_name: user.displayName,
			category_id: parseInt(data.category),
			productStatus: 'available',
			phone: data.phone,
			condition: data.condition,
			date: localDateTime,
		};
		fetch('http://localhost:5000/products', {
			method: 'POST',
			headers: {
				'content-Type': 'application/json',
			},
			body: JSON.stringify(productDetails),
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
				reset();
			});
	};
	return (
		<div className="w-full">
			<div className="p-7 pt-3">
				<h2 className="text-left text-primary uppercase text-3xl font-bold">Add Prodcut</h2>
				<form onSubmit={handleSubmit(handleProduct)}>
					<div className="grid lg:grid-cols-3 gap-5 md:w-[900px]">
						<div className="left-side">
							<div className="form-control  max-w-xs">
								<label className="label">
									<span className="label-text">Product Name</span>
								</label>
								<input
									type="text"
									{...register('name', {
										required: 'Please Enter Product Name',
									})}
									className="input input-bordered input-primary  max-w-xs"
								/>
								<span className="mt-1">
									{errors.name && <p className="text-red-500">{errors.name.message}</p>}
								</span>
							</div>
							<div className="form-control  max-w-xs">
								<label className="label">
									<span className="label-text">Price</span>
								</label>
								<input
									type="text"
									{...register('price', {
										required: 'Please Enter price',
									})}
									className="input input-bordered input-primary  max-w-xs"
								/>
								<span className="mt-1">
									{errors.email && <p className="text-red-500">{errors.email.message}</p>}
								</span>
							</div>

							<div className="form-control  max-w-xs">
								<label className="label">
									<span className="label-text">Condition</span>
								</label>
								<select {...register('condition')} className="select select-primary  max-w-xs">
									<option>Excellent</option>
									<option value="Good">Good</option>
									<option value="bad">bad</option>
								</select>
							</div>
						</div>
						<div className="middle-side">
							<div className="form-control  max-w-xs">
								<label className="label">
									<span className="label-text">Phone Number</span>
								</label>
								<input
									type="text"
									{...register('phone', {
										required: 'Please Enter Your Number',
									})}
									className="input input-bordered input-primary  max-w-xs"
								/>
								<span className="mt-1">
									{errors.name && <p className="text-red-500">{errors.name.message}</p>}
								</span>
							</div>
							<div className="form-control  max-w-xs">
								<label className="label">
									<span className="label-text">Location</span>
								</label>
								<select {...register('location')} className="select select-primary  max-w-xs">
									<option>Dhaka</option>
									<option value="Rajshahi">Rajshahi</option>
									<option value="Khulna">Khulna</option>
									<option value="Chittagong">Chittagong</option>
									<option value="Cumilla">Cumilla</option>
								</select>
								<span className="mt-1">
									{errors.email && <p className="text-red-500">{errors.email.message}</p>}
								</span>
							</div>

							<div className="form-control  max-w-xs">
								<label className="label">
									<span className="label-text">Product Category</span>
								</label>
								<select {...register('category')} className="select select-primary  max-w-xs">
									<option value={1}>Home</option>
									<option value="2">Kichen</option>
									<option value="3">Office</option>
								</select>
							</div>
						</div>
						<div className="right-side">
							<div className="form-control  max-w-xs">
								<label className="label">
									<span className="label-text">Year of purchase</span>
								</label>
								<input
									type="text"
									{...register('uses', {
										required: 'Please Enter Year of purchase',
									})}
									className="input input-bordered input-primary  max-w-xs"
								/>
								<span className="mt-1">
									{errors.name && <p className="text-red-500">{errors.name.message}</p>}
								</span>
							</div>
							<div className="form-control  max-w-xs">
								<label className="label">
									<span className="label-text">Product Image</span>
								</label>
								<input
									type="text"
									{...register('img', {
										required: 'Please Enter Image Url',
									})}
									className="input input-bordered input-primary  max-w-xs"
								/>
								<span className="mt-1">
									{errors.name && <p className="text-red-500">{errors.name.message}</p>}
								</span>
							</div>
							<div className="form-control  max-w-xs">
								<label className="label">
									<span className="label-text">Orginal Price</span>
								</label>
								<input
									type="text"
									{...register('og_price', {
										required: 'Orginal Price',
									})}
									className="input input-bordered input-primary  max-w-xs"
								/>
								<span className="mt-1">
									{errors.name && <p className="text-red-500">{errors.name.message}</p>}
								</span>
							</div>
						</div>
					</div>

					<input
						className="btn btn-outline btn-primary  mt-4 mb-3"
						value="Add Prodcut"
						type="submit"
					/>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
