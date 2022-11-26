import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../../Context/AuthProvider';
import UseTitle from '../../../hooks/UseTitle';
import UseToken from '../../../hooks/UseToken';
const Login = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm();
	const {LoginUser, loginGoogle} = useContext(AuthContext);
	const [userEmail, setUserEmail] = useState('');
	UseTitle('Login | Woods Stocks');
	UseToken(userEmail);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	//*Login With Email and Password
	const handleLogin = (data) => {
		const {email, password} = data;
		LoginUser(email, password)
			.then((result) => {
				toast.success('Login Successfull', {
					style: {
						border: '1px solid #D94A38',
						padding: '16px',
						color: '#D94A38',
						fontWeight: 'bold',
					},
				});
				setUserEmail(data.email);
				// navigate(from, {replace: true});
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
	//*Login With Google
	const handleGoogleLogin = () => {
		loginGoogle()
			.then((result) => {
				// const user = result.user;
				toast.success('Google Login Successfull', {
					style: {
						border: '1px solid #D94A38',
						padding: '16px',
						color: '#D94A38',
						fontWeight: 'bold',
					},
				});

				navigate(from, {replace: true});
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
	return (
		<div className=" flex justify-center items-center text-left">
			<div className="w-96 p-7 pt-3">
				<h2 className="text-2xl text-center font-bold">Login</h2>
				<form onSubmit={handleSubmit(handleLogin)}>
					<div className="form-control w-full max-w-xs"></div>
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
					<input
						className="btn btn-outline btn-primary w-full mt-4 mb-3"
						value="Login"
						type="submit"
					/>
				</form>
				<p>
					New to Wood Stocks
					<Link className="text-primary" to="/signup">
						<span className=" ml-2">sign up</span>
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

export default Login;
