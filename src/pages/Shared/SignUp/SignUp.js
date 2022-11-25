import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../../Context/AuthProvider';
import UseTitle from '../../../hooks/UseTitle';
const SignUp = () => {
	UseTitle('Signup | Woods Stocks');
	const navigate = useNavigate();
	const {createUser, userUpdate, loginGoogle} = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm();
	//*Create user With EEail and Password
	const handleSignUp = (data) => {
		const {name, email, password} = data;
		createUser(email, password)
			.then((result) => {
				handleUpdate(name);
				fetch(`http://localhost:5000/user`, {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(data),
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.acknowledged) {
							toast.success('Sign Up Successfull', {
								style: {
									border: '1px solid #D94A38',
									padding: '16px',
									color: '#D94A38',
									fontWeight: 'bold',
								},
							});
						}
					});
				navigate('/login');
				reset();
			})
			.catch((err) => {
				console.error(err);
				const message = err.message;
				const cutMessage = message.split('/')[1].split(')')[0];
				toast.error(`Opps! ${cutMessage}`, {
					style: {
						border: '1px solid #D94A38',
						padding: '16px',
						color: '#D94A38',
						fontWeight: 'bold',
					},
				});
			});
	};
	//*handle update name
	const handleUpdate = (name) => {
		const profile = {
			displayName: name,
		};
		userUpdate(profile)
			.then((result) => {})
			.catch((err) => {
				const message = err.message;
				const cutMessage = message.split('/')[1].split(')')[0];
				toast.error(`Opps! ${cutMessage}`, {
					style: {
						border: '1px solid #D94A38',
						padding: '16px',
						color: '#D94A38',
						fontWeight: 'bold',
					},
				});
			});
	};
	const handleGoogleLogin = () => {
		loginGoogle()
			.then((result) => {
				const user = result.user;
				const userinfo = {
					name: user.displayName,
					email: user.email,
					userRole: 'Buyer',
				};
				fetch(`http://localhost:5000/user`, {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(userinfo),
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.acknowledged) {
							toast.success('Google Login Successfull', {
								style: {
									border: '1px solid #D94A38',
									padding: '16px',
									color: '#D94A38',
									fontWeight: 'bold',
								},
							});
						}
					});
				navigate('/');
			})
			.catch((err) => {
				console.error(err);
				const message = err.message;
				const cutMessage = message.split('/')[1].split(')')[0];
				toast.error(`Opps! ${cutMessage}`, {
					style: {
						border: '1px solid #D94A38',
						padding: '16px',
						color: '#D94A38',
						fontWeight: 'bold',
					},
				});
			});
	};
	return (
		<div className=" flex justify-center items-center text-left">
			<div className="w-96 p-7 pt-3">
				<h2 className="text-2xl text-center font-bold">Sign Up</h2>
				<form onSubmit={handleSubmit(handleSignUp)}>
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input
							type="text"
							{...register('name', {
								required: 'Please Enter Your Name',
							})}
							className="input input-bordered w-full max-w-xs"
						/>
						<span className="mt-1">
							{errors.name && <p className="text-red-500">{errors.name.message}</p>}
						</span>
					</div>
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							type="email"
							{...register('email', {
								required: 'Please Enter Your E-mail',
							})}
							className="input input-bordered w-full max-w-xs"
						/>
						<span className="mt-1">
							{errors.email && <p className="text-red-500">{errors.email.message}</p>}
						</span>
					</div>
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							{...register('password', {
								required: 'Please Enter Password',
								minLength: {value: 6, message: 'Password must be at-least 6 characters '},
								pattern: {
									value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
									message: 'Password must have uppercase, number and special characters',
								},
							})}
							className="input input-bordered w-full max-w-xs"
						/>
						<span className="mt-1">
							{errors.password && <p className="text-red-500">{errors.password.message}</p>}
						</span>
					</div>
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">Role</span>
						</label>
						<select {...register('userRole')} className="select select-primary w-full max-w-xs">
							<option>Buyer</option>
							<option value="Seller">Seller</option>
						</select>
					</div>

					<input
						className="btn btn-outline btn-primary w-full mt-4 mb-3"
						value="Sign Up"
						type="submit"
					/>
				</form>
				<p>
					New to Wood Stocks
					<Link className="text-primary" to="/login">
						<span className=" ml-2">Login</span>
					</Link>
				</p>
				<div className="divider">OR</div>
				<button
					onClick={handleGoogleLogin}
					className="btn btn-outline btn-primary mx-auto h-full flex justify-center items-center"
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
						alt=""
						className="w-6 block"
					/>
				</button>
			</div>
		</div>
	);
};

export default SignUp;
