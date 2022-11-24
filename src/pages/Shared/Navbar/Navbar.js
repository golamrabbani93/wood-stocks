import React, {useContext, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {AuthContext} from '../../../Context/AuthProvider';
import './Navbar.css';

const Navbar = () => {
	const {user} = useContext(AuthContext);
	const [menu, sentMenu] = useState(false);
	const navItems = (
		<>
			<NavLink className="mr-7" to={'/'} end>
				Home
			</NavLink>
			<NavLink className="mr-7" to={'/about'}>
				About
			</NavLink>
		</>
	);
	return (
		<header className="relative z-10 ">
			<div className="navbar container mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<label className="btn btn-circle swap swap-rotate lg:hidden bg-transparent hover:bg-transparent text-accent border-0 font-bold">
							<input onClick={() => sentMenu(!menu)} type="checkbox" />

							<svg
								className="swap-off fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 512 512"
							>
								<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
							</svg>

							<svg
								className="swap-on fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 512 512"
							>
								<polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
							</svg>
						</label>
						{menu ? (
							<ul className="menu menu-compact  mt-3 p-2 shadow bg-base-100 rounded-box w-52">
								{navItems}
							</ul>
						) : (
							''
						)}
					</div>
					<Link className="btn text-center hidden md:block btn-ghost hover:bg-transparent text-primary font-extrabold normal-case text-3xl">
						Wood Stocks
					</Link>
				</div>
				<Link className="btn text-center normal-case hover:bg-transparent text-primary font-extrabold md:hidden text-xl">
					Wood Stock
				</Link>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">{navItems}</ul>
				</div>
				<div className="navbar-end">
					{user?.uid ? (
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full">
									<img src="https://placeimg.com/80/80/people" alt="" />
								</div>
							</label>
							<ul
								tabIndex={0}
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52"
							>
								<li className="font-bold text-center">{user?.displayName}</li>
								<li>
									<Link className="justify-between">
										Profile
										<span className="badge">New</span>
									</Link>
								</li>
								<li>
									<Link>Settings</Link>
								</li>
								<li>
									<Link>Logout</Link>
								</li>
							</ul>
						</div>
					) : (
						<Link className="btn">Login</Link>
					)}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
