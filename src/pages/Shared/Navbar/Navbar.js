import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const [menu, sentMenu] = useState(false);
	console.log('🚀🚀: Navbar -> menu', menu);
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
				{/* <div className="navbar-end">
					<Link className="btn">Get started</Link>
				</div> */}
			</div>
		</header>
	);
};

export default Navbar;
