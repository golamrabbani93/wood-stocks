import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {AuthContext} from '../../../Context/AuthProvider';
import './Navbar.css';
import {FaUserAlt} from 'react-icons/fa';
const Navbar = () => {
	const {user, userSignOut} = useContext(AuthContext);
	const navItems = (
		<>
			<NavLink className="mr-7" to={'/'} end>
				Home
			</NavLink>
			<NavLink className="mr-7" to={'/blog'}>
				Blog
			</NavLink>
			<NavLink className="mr-7" to={'/dashboard'}>
				DashBoard
			</NavLink>
		</>
	);
	return (
		<header className="relative z-10 ">
			<div className="navbar container mx-auto">
				<div className="navbar-start w-0 lg:w-1/2 mr-auto">
					<div className="flex justify-between ">
						<div className="dropdown">
							<label tabIndex={0} className="btn text-white btn-primary lg:hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</label>
							<ul
								tabIndex={0}
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52 "
							>
								{navItems}
								{user?.uid ? (
									''
								) : (
									<div className="navbar-end lg:hidden w-full">
										<Link to="/login" className="btn">
											Login
										</Link>
									</div>
								)}
							</ul>
						</div>
					</div>
					<div className="mr-auto">
						<Link
							to="/"
							className="btn text-center hidden md:block btn-ghost hover:bg-transparent text-primary font-extrabold normal-case text-3xl"
						>
							Woods Stock
						</Link>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">{navItems}</ul>
				</div>
				<div className="navbar-end">
					{user?.uid ? (
						<div
							className={`dropdown dropdown-end ${
								user?.photoURL ? '' : 'border border-primary rounded-full'
							}`}
						>
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full  ">
									{user?.photoURL ? (
										<img src={user?.photoURL} alt="" />
									) : (
										<div className="flex justify-center items-center h-full">
											<FaUserAlt className=""></FaUserAlt>
										</div>
									)}
								</div>
							</label>
							<ul
								tabIndex={0}
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52"
							>
								<li className="font-bold text-center">{user?.displayName}</li>
								<li>
									<Link to={'/dashboard'} className="justify-between">
										DashBoard
									</Link>
								</li>

								<li>
									<button onClick={userSignOut}>Logout</button>
								</li>
							</ul>
						</div>
					) : (
						<Link
							to={'/login'}
							className="btn btn-outline btn-primary flex justify-center items-center"
						>
							<FaUserAlt className="w-3"></FaUserAlt>
							<span className="ml-1 mt-1 uppercase ">Login</span>
						</Link>
					)}
				</div>
				{user?.uid ? (
					<label htmlFor="my-drawer-2" className="ml-3 btn btn-primary drawer-button lg:hidden">
						<svg
							className="swap-off fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 512 512"
						>
							<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
						</svg>
					</label>
				) : (
					''
				)}
			</div>
		</header>
	);
};

export default Navbar;
