import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../Context/AuthProvider';
const SignUp = () => {
	const {createUser} = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm();
	const [error, setError] = useState('');
	const handleSignUp = (data) => {};
	return (
		<div className=" flex justify-center items-center text-left">
			<div className="w-96 p-7 pt-3">
				<h2 className="text-xl text-center">Sign Up</h2>
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
					<input className="btn btn-accent w-full mt-4" value="Sign Up" type="submit" />
					<span className="mt-1"> {error && <p className="text-red-600">{error}</p>}</span>
				</form>
				<p>
					New to Wood Stocks
					<Link className="text-primary" to="/login">
						<span className=" ml-2">Login</span>
					</Link>
				</p>
				<div className="divider">OR</div>
				<button className="btn btn-outline btn-primary w-full flex justify-center items-center">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
						alt=""
						className="w-5 block"
					/>
					<span className="ml-3">CONTINUE WITH GOOGLE</span>
				</button>
			</div>
		</div>
	);
};

export default SignUp;
